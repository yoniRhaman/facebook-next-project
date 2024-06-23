"use client";
import Image from "next/image";
import "./productPage.css";
import { getCookie } from "cookies-next";
import { FaTrashCan } from "react-icons/fa6";
import { deleteProductById } from "@/utils/api/marketplaceApi";
import { useProductContext } from "@/utils/contexts/productContext";
import { useRouter } from "next/navigation"; // ייבוא useRouter מ-next/navigation
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
  const { addChat } = useChatContext();
  const { currentChat, setCurrentChat } = useChatContext();

  const handleDelete = async () => {
    await deleteProductById(myProduct._id, user_id, token);
    setProducts((prev) => prev.filter((p) => p._id !== myProduct._id));
    router.push("/marketplace");
  };
  const handleChat = async () => {
    try {
      setLoading(true);
      const token = getCookie("token");
      const uid = getCookie("uid");
      const json = {};
      json["owner"] = getCookie("uid");
      json["participants"] = [myProduct["owner"], json["owner"]];
      const chat = await createNewChat(json, token);
      if (chat.status === "notExisting") {
        addChat(chat.myChat);
        const u = await getUserData(
          token,
          chat.myChat.participants.filter((p) => p !== uid)[0],
        );
        setCurrentChat({ ...chat.myChat, user: u });
      } else if (chat.status === "existing") {
        const u = await getUserData(
          token,
          chat.myChat.participants.filter((p) => p !== uid)[0],
        );
        setCurrentChat({ ...chat.myChat, user: u });
      }
      router.push("/messages");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const myImagges = myProduct.images.map((i) => (
    <div className="img1">
      <Image src={i} alt="Image" width={120} height={120} objectFit="fill" />
    </div>
  ));

  return (
    <div className="my-body row">
      <div className="imges center">
        <Image
          className="back-img"
          src={myProduct.mainImage}
          alt="Sunset Beach"
          width={830}
          height={520}
          objectFit="fill"
          style={{ filter: "blur(5px)" }}
        />
        <div className="main-img">
          <Image
            src={myProduct.mainImage}
            alt="Sunset Beach"
            width={1000}
            height={1000}
            objectFit="contain"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="details column">
        <div className="all-imges">{myImagges}</div>
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
            chat
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPageComponent;
