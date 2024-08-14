"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import MapFloor from "../../components/ThreeD/MapFloor";
import Lights from "../../components/ThreeD/Lights";
import { Character } from "../../components/ThreeD/Character";
import StoreFrame from "@/components/ThreeD/StoreFrame";
import Furniture from "@/components/ThreeD/Furniture";
import { SittingChar } from "@/components/ThreeD/characters/SittingChar";
import { SittingChar2 } from "@/components/ThreeD/characters/SittingChar2";
import { Staff } from "@/components/ThreeD/characters/Staff";
import { Segmented, Avatar, Button, Modal, Card } from "antd";

import productsData from "../productData";

const { Meta } = Card;
import {
  UserOutlined,
  ShoppingCartOutlined,
  RobotOutlined,
  ArrowsAltOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { resolveQuery } from "@/chat/chat";
import CartComponent from "@/components/Cart/CartComponent";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Page() {
  const testing = true;
  const [segment, setSegment] = useState("user1");
  const [isAiModalVisible, setIsAiModalVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [isModelModalVisible, setIsModelModalVisible] = useState(false); // New state for laptop modal
  const [models, setModels] = useState(""); // New state to store modelPath
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load messages from local storage
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  useEffect(() => {
    // Save messages to local storage
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      const response = await resolveQuery(input);
      console.log("Response", response);
      setInput("");

      setMessages([
        ...messages,
        { text: input, type: "user" },
        { text: response.reply, type: "bot" },
      ]);
    }
  };

  const handleClearChat = () => {
    // Clear messages from local storage
    localStorage.removeItem("messages");
    // Clear messages from the state
    setMessages([]);
  };
  const showAiModal = () => {
    setIsAiModalVisible(true);
  };

  const handleAiModalCancel = () => {
    setIsAiModalVisible(false);
  };

  const showCartModal = () => {
    setIsCartModalVisible(true);
  };

  const handleCartModalCancel = () => {
    setIsCartModalVisible(false);
  };
  const showModelModal = (path) => {
    const product = productsData.items.find(
      (item) => `./models/${item?.id}.glb` === path
    );
    setModels(product);
    setIsModelModalVisible(true);
  };

  const handleModelModalCancel = () => {
    setIsModelModalVisible(false);
  };

  const handleLaptopClick = (modelPath) => {
    showModelModal(modelPath);
  };

  return (
    <>
      <div className="bg-gray-500 h-[100vh] relative">
        {/* Segmented Control in the top center with only icons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Segmented
            options={[
              {
                label: (
                  <Avatar
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user1",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#f56a00" }}
                    shape="square"
                    size="large"
                  >
                    K
                  </Avatar>
                ),
                value: "user2",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    shape="square"
                    size="large"
                  />
                ),
                value: "user3",
              },
            ]}
            value={segment}
            onChange={(value) => setSegment(value)}
          />
        </div>

        {/* Floating Button for Cart */}
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            shape="circle"
            icon={<ShoppingCartOutlined />}
            size="large"
            style={{ backgroundColor: "#87d068", color: "white" }}
            onClick={showCartModal} // Open cart modal on click
          />
        </div>

        {/* Floating Button for AI */}
        <div className="fixed bottom-16 right-4 z-20">
          <Button
            shape="circle"
            icon={<RobotOutlined />}
            size="large"
            style={{ backgroundColor: "#1890ff", color: "white" }}
            onClick={showAiModal} // Open AI modal on click
          />
        </div>

        {/* Controls for Movement */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex">
            <div className="flex flex-col items-center ml-4">
              <Button
                shape="default"
                style={{
                  width: 40,
                  height: 40,
                  margin: 1,
                  borderRadius: 5,
                  opacity: 0.7,
                }}
              >
                W
              </Button>
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{
                    width: 40,
                    height: 40,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.7,
                  }}
                >
                  A
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 40,
                    height: 40,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.7,
                  }}
                >
                  S
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 40,
                    height: 40,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.7,
                  }}
                >
                  D
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center ml-4">
              <div className="flex flex-row">
                <Button
                  shape="default"
                  style={{
                    width: 40,
                    height: 40,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.7,
                  }}
                >
                  1
                </Button>
                <Button
                  shape="default"
                  style={{
                    width: 40,
                    height: 40,
                    margin: 1,
                    borderRadius: 5,
                    opacity: 0.7,
                  }}
                >
                  2
                </Button>
              </div>
              <Button
                shape="default"
                style={{
                  width: 50,
                  height: 40,
                  margin: 1,
                  borderRadius: 5,
                  opacity: 0.7,
                }}
              >
                Shift
              </Button>
            </div>
          </div>
        </div>

        <Canvas
          shadows
          camera={{ position: [0, 30, 55], fov: 50 }}
          style={{ zIndex: 0 }} // Ensure Canvas has a lower z-index
        >
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[200, 200]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
          <MapFloor />
          <Character />
          <StoreFrame />
          <Furniture onLaptopClick={handleLaptopClick} />
          <SittingChar />
          <SittingChar2 />
          <Staff onClick={showAiModal} /> {/* Pass the function here */}
        </Canvas>
      </div>

      {/* Modal for AI */}
      <Modal
        title="AI Assistant"
        open={isAiModalVisible}
        onCancel={handleAiModalCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          height: "calc(100vh - 20px)", // Increase height
        }}
        bodyStyle={{ overflowY: "auto" }}
      >
        <p>Your AI assistant is here to help!</p>
        <div>
          <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Chat</h2>
              <button
                onClick={handleClearChat}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Clear Chat
              </button>
            </div>
            <div className="mt-4 h-60 overflow-y-auto border border-gray-300 p-2 rounded-lg">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.type === "user" ? "text-right" : ""}`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      msg.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="mt-4 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-lg"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* Add more content here as needed */}
      </Modal>

      {/* Modal for Cart */}
      <Modal
        title="Cart"
        open={isCartModalVisible}
        onCancel={handleCartModalCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          height: "calc(100vh - 20px)", // Increase height
        }}
        bodyStyle={{ overflowY: "auto" }}
      >
        <div>
          <CartComponent />
        </div>
      </Modal>
      {/* modal for model */}
      <Modal
        open={isModelModalVisible}
        onCancel={handleModelModalCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 30,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 0,
        }}
      >
        <Card
          style={{ height: "100%" }}
          cover={
            <img
              alt="Laptop Model"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{ height: "50%", objectFit: "cover" }} // Adjust image to fit
            />
          }
          actions={[
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              key="add-to-cart"
            >
              Add to Cart
            </Button>,
            <Button
              type="primary"
              danger
              icon={<ArrowsAltOutlined />}
              key="view-in-ar"
            >
              View in AR
            </Button>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-between">
                <span>{models.name}</span>
                <Button
                  icon={<ShareAltOutlined />}
                  className="text-blue-500"
                  type="text"
                  onClick={() => alert("Share functionality here")}
                />
              </div>
            }
            description={
              <>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-700">
                    Price:{" "}
                    <span className="text-xl font-bold text-green-600">
                      ₹{models.price}
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                  {models.specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <strong className="mr-2 text-sm font-medium text-gray-800">
                        {spec.key}:
                      </strong>
                      <span className="text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </>
            }
          />
        </Card>
      </Modal>
    </>
  );
}
