"use client";
import Image from "next/image";
import "./productPage.css";
import { getCookie } from "cookies-next";
import { FaTrashCan } from "react-icons/fa6";
import { deleteProductById } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { createNewChat } from "@/utils/api/chatApi";
import { getUserData } from "@/utils/api/loginApi";
import { useChatContext } from "@/utils/contexts/ChatContext";

function ProductPageComponent({ myProduct }) {
  const user_id = getCookie("uid");
  const token = getCookie("token");
  const { setProducts } = useProductContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { addChat, setCurrentChat } = useChatContext();

  // Handle product deletion
  const handleDelete = async () => {
    try {
      await deleteProductById(myProduct._id, user_id, token);
      setProducts(prev => prev.filter(p => p._id !== myProduct._id));
      router.push("/marketplace");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle chat initiation
  const handleChat = async () => {
    try {
      setLoading(true);
      const json = {
        owner: user_id,
        participants: [myProduct.owner, user_id]
      };

      const chat = await createNewChat(json, token);
      const chatParticipantId = chat.myChat.participants.find(p => p !== user_id);

      if (chat.status === "notExisting") {
        addChat(chat.myChat);
      }

      const user = await getUserData(token, chatParticipantId);
      setCurrentChat({ ...chat.myChat, user });
      router.push("/messages");
    } catch (error) {
      console.error("Error creating or fetching chat:", error);
    } finally {
      setLoading(false);
    }
  };

  // Map product images for display
  const productImages = myProduct.images.map((image, index) => (
    <div key={index} className="img1">
      <img src={image} alt={`Product Image ${index + 1}`} />
    </div>
  ));

  return (
    <div className="my-body row">
      <div className="images center">
        <div className="main-img center">
          <img className="current-img" src={myProduct.mainImage} alt="Main Product Image" />
        </div>
      </div>
      <div className="details column">
        <div className="all-images">{productImages}</div>
        <div className="my-text column">
          <div className="title">{myProduct.name}</div>
          <div className="price">{myProduct.price}</div>
          <div className="location">{myProduct.location}</div>
          <div className="description">{myProduct.description}</div>
        </div>
        {loading ? (
          <CircularProgress sx={{ color: "white" }} />
        ) : myProduct.owner === user_id ? (
          <button className="chat garbage" onClick={handleDelete}>
            <FaTrashCan />
          </button>
        ) : (
          <button className="chat" onClick={handleChat}>
            Chat
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPageComponent;
