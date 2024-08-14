'use client'
import React, { useEffect, useRef, useState } from "react";
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
import {
  UserOutlined,
  ShoppingCartOutlined,
  RobotOutlined,
  ArrowsAltOutlined,
  ShareAltOutlined,
  HistoryOutlined
} from "@ant-design/icons";
import CartComponent from "@/components/Cart/CartComponent";
import { addItemToCart, getCartDetails } from "@/components/Cart/cart";
import { resolveQuery } from "@/chat/chat";

const { Meta } = Card;

export default function Page() {
  const testing = false;
  const [segment, setSegment] = useState("user1");
  const [isAiModalVisible, setIsAiModalVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [isModelModalVisible, setIsModelModalVisible] = useState(false);
  const [isOrdersModalVisible, setIsOrdersModalVisible] = useState(false); // State for orders modal
  const [models, setModels] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]); // State for past orders
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);

    const storedOrders = getCartDetails(1) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      const response = await resolveQuery(input);
      setInput("");

      setMessages([
        ...messages,
        { text: input, type: "user" },
        { text: response.reply, type: "bot" ,id:response?.id},
      ]);
    }
  };
  const findProduct = (id) => {
    return productsData.items.find(item => item?.id === id);
  };

  const handleClearChat = () => {
    localStorage.removeItem("messages");
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

  const handleOrdersModal = () => {
    setIsOrdersModalVisible(true);
  };

  const handleOrdersModalCancel = () => {
    setIsOrdersModalVisible(false);
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
            onClick={showCartModal}
          />
        </div>

        {/* Floating Button for AI */}
        <div className="fixed bottom-16 right-4 z-20">
          <Button
            shape="circle"
            icon={<RobotOutlined />}
            size="large"
            style={{ backgroundColor: "#1890ff", color: "white" }}
            onClick={showAiModal}
          />
        </div>

        {/* Floating Button for Orders */}
        <div className="fixed bottom-28 right-4 z-20">
          <Button
            shape="circle"
            icon={<HistoryOutlined />}
            size="large"
            style={{ backgroundColor: "#ff4d4f", color: "white" }}
            onClick={handleOrdersModal}
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
          <Staff onClick={showAiModal} />
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
        width: "100%",
        padding: 0,
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="flex flex-col bg-gray-200 rounded-lg h-[500px]">
        <div className="flex flex-col p-4 rounded-lg h-full overflow-y-auto ">
          {messages.map((msg, index) => {
            const product = msg.id ? findProduct(msg.id) : null;

            return (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} mb-2`}
              >
                <div
                  className={`p-2 rounded-lg ${msg.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                  style={{ maxWidth: "80%", position: "relative" }}
                >
                  {msg.text}
                  {product && (
                    <Card
                      style={{ marginTop: '10px', width: 'auto', borderRadius: '6px', padding: '8px' }}
                      cover={
                        <img
                          alt="Product"
                          src={product.imageUrl || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                          style={{ height: "100px", objectFit: "cover", borderRadius: '6px 6px 0 0' }}
                        />
                      }
                      actions={[
                        <Button
                          type="primary"
                          icon={<ShoppingCartOutlined />}
                          key="add-to-cart"
                          onClick={() => {
                            addItemToCart(product, 1);
                            alert("Added to Cart!");
                          }}
                          style={{ fontSize: '12px', padding: '4px 8px' }}
                        >
                          Add
                        </Button>,
                        <Button
                          type="primary"
                          danger
                          icon={<ArrowsAltOutlined />}
                          key="view-in-ar"
                          style={{ fontSize: '12px', padding: '4px 8px' }}
                        >
                          View AR
                        </Button>,
                      ]}
                    >
                      <Meta
                        title={
                          <div className="flex items-center justify-between text-xs">
                            <span>{product.name}</span>
                            <Button
                              icon={<ShareAltOutlined />}
                              className="text-blue-500"
                              type="text"
                              onClick={() => alert("Share functionality here")}
                              style={{ fontSize: '12px', padding: '2px' }}
                            />
                          </div>
                        }
                        description={
                          <>
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-gray-700">
                                Price:{" "}
                                <span className="text-sm font-bold text-green-600">
                                  ₹{product.price}
                                </span>
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2 rounded-lg shadow-sm text-xs">
                              {product.specs?.map((spec, index) => (
                                <div
                                  key={index}
                                  className="flex items-center text-gray-600"
                                >
                                  <strong className="mr-1 text-xs font-medium text-gray-800">
                                    {spec.key}:
                                  </strong>
                                  <span className="text-xs">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        }
                      />
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
          {/* Empty div for scrolling */}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="flex p-4 bg-gray-200 border-t border-gray-300 rounded-b-lg">
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
          height: "calc(100vh - 20px)",
        }}
        bodyStyle={{ overflowY: "auto" }}
      >
        <div>
          <CartComponent isVisible={isCartModalVisible} />
        </div>
      </Modal>

      {/* Modal for Model */}
      <Modal
        open={isModelModalVisible}
        onCancel={handleModelModalCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
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
              style={{ height: "50%", objectFit: "cover" }}
            />
          }
          actions={[
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              key="add-to-cart"
              onClick={() => {
                addItemToCart(models, 1);
                alert("Added to Cart!");
              }}
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

      {/* Modal for Orders */}
      <Modal
        open={isOrdersModalVisible}
        onCancel={handleOrdersModalCancel}
        footer={null}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          height: "calc(100vh - 20px)",
        }}
        bodyStyle={{ overflowY: "auto" }}
      >
        <div>
          <h2 className="text-lg font-bold mb-4">Your Past Orders</h2>
          {orders.length > 0 ? (
            <ul className="list-disc pl-5">
              {orders.map((order, index) => (
                <li key={index} className="mb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{order.item.name}</span>
                    <span className="text-gray-600">{`₹${order.item.price} X ${order.qty}`}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No past orders found.</p>
          )}
        </div>
      </Modal>
    </>
  );
}
