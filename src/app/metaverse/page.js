"use client";
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
import { Sky } from "@react-three/drei";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserOutlined,
  ShoppingCartOutlined,
  RobotOutlined,
  ArrowsAltOutlined,
  ShareAltOutlined,
  HistoryOutlined,
  EditOutlined,
} from "@ant-design/icons";
import CartComponent from "@/components/Cart/CartComponent";
import { addItemToCart, getCartDetails } from "@/components/Cart/cart";
import { resolveQuery } from "@/chat/chat";
import { Staff2 } from "@/components/ThreeD/characters/Staff2";
import { useInput } from "@/hooks/useInput";

const { Meta } = Card;

export default function Page() {
  const testing = false;
  const [segment, setSegment] = useState("user4");
  const [isAiModalVisible, setIsAiModalVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [isModelModalVisible, setIsModelModalVisible] = useState(false);
  const [isOrdersModalVisible, setIsOrdersModalVisible] = useState(false);
  const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);
  const inputs = useInput();
  const [models, setModels] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);
  const chatEndRef = useRef(null);
  const [color_a,setColor_a] = useState(2);
  const [color_b,setColor_b] = useState(2);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
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
        { text: response.reply, type: "bot", id: response?.id },
      ]);
    }
  };
  const findProduct = (id) => {
    return productsData.items.find((item) => item?.id === id);
  };

  const getVideoFileName = () => {
    let colorNameA = '';
    let colorNameB = '';

    if (color_a === 1) colorNameA = 'Blue';
    else if (color_a === 2) colorNameA = 'White';
    else if (color_a === 3) colorNameA = 'Black';

    if (color_b === 1) colorNameB = 'Blue';
    else if (color_b === 2) colorNameB = 'White';
    else if (color_b === 3) colorNameB = 'Black';

    return `${colorNameA}_${colorNameB}`;
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
    if(modelPath=="cart"){
      setIsCartModalVisible(true);
    }else {
      showModelModal(modelPath);
    }
  };
  const handleCustomModalCancel = () => {
    setIsCustomModalVisible(false);
  };
  const showCustomModal = () => {
    setIsCustomModalVisible(true);
  };

  return (
    <>
      <ToastContainer />
      <div className=" h-[100vh] relative">
        {/* Segmented Control in the top center with only icons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Segmented
            className="bg-blue-500 p-1 opacity-[0.8]"
            options={[
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod1.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user1",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod2.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user2",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod3.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user3",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod4.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user4",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod5.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user5",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod6.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user6",
              },
              {
                label: (
                  <Avatar
                    style={{ backgroundColor: "#FFFF00" }}
                    src="./images/mod7.png"
                    shape="square"
                    size="large"
                  />
                ),
                value: "user7",
              },
            ]}
            value={segment}
            onChange={(value) => setSegment(value)}
          />
        </div>

        {/* Floating Button for Edit */}
        <div className="fixed bottom-40 right-4 z-20">
          <Button
            shape="circle"
            icon={<EditOutlined />}
            size="large"
            style={{ backgroundColor: "#0000FF", color: "white" }}
            onClick={showCustomModal}
          />
        </div>
        {/* Floating Button for Cart */}
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            shape="circle"
            icon={<ShoppingCartOutlined />}
            size="large"
            style={{ backgroundColor: "#008000", color: "white" }}
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
              width: 60,
              height: 60,
              margin: 1,
              borderRadius: 5,
              opacity: 0.9,
              backgroundColor: inputs.forward ? 'yellow' : '', // Change to yellow when 'W' is pressed
            }}
          >
            <div className="text-center flex flex-col">
              <div className="text-lg font-bold">W</div>
              <div className="text-xs font-thin">Forward</div>
            </div>
          </Button>
          <div className="flex flex-row">
            <Button
              shape="default"
              style={{
                width: 60,
                height: 60,
                margin: 1,
                borderRadius: 5,
                opacity: 0.9,
                backgroundColor: inputs.left ? 'yellow' : '', // Change to yellow when 'A' is pressed
              }}
            >
              <div className="text-center flex flex-col">
                <div className="text-lg font-bold">A</div>
                <div className="text-xs font-thin">Left</div>
              </div>
            </Button>
            <Button
              shape="default"
              style={{
                width: 60,
                height: 60,
                margin: 1,
                borderRadius: 5,
                opacity: 0.9,
                backgroundColor: inputs.backward ? 'yellow' : '', // Change to yellow when 'S' is pressed
              }}
            >
              <div className="text-center flex flex-col">
                <div className="text-lg font-bold">S</div>
                <div className="text-xs font-thin">Backward</div>
              </div>
            </Button>
            <Button
              shape="default"
              style={{
                width: 60,
                height: 60,
                margin: 1,
                borderRadius: 5,
                opacity: 0.9,
                backgroundColor: inputs.right ? 'yellow' : '', // Change to yellow when 'D' is pressed
              }}
            >
              <div className="text-center flex flex-col">
                <div className="text-lg font-bold">D</div>
                <div className="text-xs font-thin">Right</div>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center ml-4">
          <div className="flex flex-row">
            <Button
              shape="default"
              style={{
                width: 60,
                height: 60,
                margin: 1,
                borderRadius: 5,
                opacity: 0.9,
                backgroundColor: inputs.break_dance ? 'yellow' : '', // Change to yellow when '1' is pressed
              }}
            >
              <div className="text-center flex flex-col">
                <div className="text-lg font-bold">1</div>
                <div className="text-xs font-thin">Emote</div>
              </div>
            </Button>
            <Button
              shape="default"
              style={{
                width: 60,
                height: 60,
                margin: 1,
                borderRadius: 5,
                opacity: 0.9,
                backgroundColor: inputs.backflip ? 'yellow' : '', // Change to yellow when '2' is pressed
              }}
            >
              <div className="text-center flex flex-col">
                <div className="text-lg font-bold">2</div>
                <div className="text-xs font-thin">Emote</div>
              </div>
            </Button>
          </div>
          <Button
            shape="default"
            style={{
              width: 70,
              height: 60,
              margin: 1,
              borderRadius: 5,
              opacity: 0.9,
              backgroundColor: inputs.shift ? 'yellow' : '', // Change to yellow when 'SHIFT' is pressed
            }}
          >
            <div className="text-center flex flex-col">
              <div className="text-lg font-bold">SHIFT</div>
              <div className="text-xs font-thin">Sprint</div>
            </div>
          </Button>
        </div>
      </div>
    </div>

        <Canvas
          shadows
          camera={{ position: [0, 30, 55], fov: 50 }}
          style={{ zIndex: 0 }}
        >
          {testing ? <axesHelper visible={testing} args={[200]} /> : null}
          {testing ? <gridHelper args={[200, 200]} /> : null}
          <OrbitControls />
          {testing ? <Stats /> : null}
          <Lights />
          <Sky/>
          <MapFloor />
          <Character />
          <StoreFrame />
          <Furniture onLaptopClick={handleLaptopClick} />
          <SittingChar />
          <SittingChar2 />
          <Staff onClick={showCustomModal} />
          <Staff2 onClick={showAiModal} />
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
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  {msg.type != "user" ?<Avatar
                    src="./images/staff.png"
                    shape="circle"
                    size="large"
                  />:<></>}
                  <div
                    className={`p-2 rounded-lg ${
                      msg.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                    style={{ maxWidth: "80%", position: "relative" }}
                  >
                    {msg.text}
                    {product && (
                      <Card
                        style={{
                          marginTop: "10px",
                          width: "auto",
                          borderRadius: "6px",
                          padding: "8px",
                        }}
                        cover={
                          <video
                            src={`./videos/${msg.id}.MOV`}
                            style={{
                              height: "50%",
                              objectFit: "cover",
                              padding: 1,
                            }}
                            autoPlay
                            loop
                            muted
                            className="border-b"
                          />
                        }
                        actions={[
                          <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            key="add-to-cart"
                            onClick={() => {
                              addItemToCart(product, 1);
                              toast.success("Added to cart !");
                            }}
                            style={{ fontSize: "12px", padding: "4px 8px" }}
                          >
                            Add to Cart
                          </Button>,
                          <a href={`https://metamart-ar.vercel.app/view/${models.id}`} target="_blank" rel="noopener noreferrer">
                          <Button
                            type="primary"
                            danger
                            icon={<ArrowsAltOutlined />}
                            key="view-in-ar"
                            style={{ fontSize: "12px", padding: "4px 8px" }}
                          >
                            View in AR
                          </Button>
                        </a>
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
                                onClick={() =>
                                  toast("Share functionality here")
                                }
                                style={{ fontSize: "12px", padding: "2px" }}
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
                                    <span className="text-xs">
                                      {spec.value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </>
                          }
                        />
                      </Card>
                    )}
                  </div>
                  {msg.type == "user" ?<Avatar
                    src="./images/mod4.png"
                    shape="circle"
                    size="large"
                  />:<></>}
                </div>
              );
            })}
            {/* Empty div for scrolling */}
            <div ref={chatEndRef} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex p-4 bg-gray-200 border-t border-gray-300 rounded-b-lg"
          >
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
      {isCartModalVisible && <Modal
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
          {isCartModalVisible && <CartComponent isVisible={isCartModalVisible} />}
        </div>
      </Modal>}

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
            <video
              src={`./videos/${models.id}.MOV`}
              style={{ height: "50%", objectFit: "cover", padding: 1 }}
              autoPlay
              loop
              muted
              className="border-b"
            />
          }
          actions={[
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              key="add-to-cart"
              onClick={() => {
                addItemToCart(models, 1);
                toast.success("Added to Cart!");
              }}
            >
              Add to Cart
            </Button>,
            <a href={`https://metamart-ar.vercel.app/view/${models.id}`} target="_blank" rel="noopener noreferrer">
            <Button
              type="primary"
              danger
              icon={<ArrowsAltOutlined />}
              key="view-in-ar"
              style={{ fontSize: "12px", padding: "4px 8px" }}
            >
              View in AR
            </Button>
          </a>
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
                  onClick={() => toast("Share functionality here")}
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
          <h2 className="text-lg font-bold mb-4">Your Orders</h2>
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
      {/* modal for customisation */}
      {isCustomModalVisible && (
        <Modal
          open={isCustomModalVisible}
          onCancel={handleCustomModalCancel}
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
              <video
                src={`./videos/${getVideoFileName()}.MOV`}
                style={{ height: "50%", objectFit: "cover", padding: 1 }}
                autoPlay
                loop
                muted
                className="border-b w-1/2"
              />
            }
            actions={[
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                key="add-to-cart"
                onClick={() => {
                  // addItemToCart(models, 1);
                  const model = {
                    id:getVideoFileName(),
                    name:"Samsung S23",
                    price:49000
                  }
                  addItemToCart(model,1)
                  toast.success("Added to Cart!");
                }}
              >
                Add to Cart
              </Button>,
              <a href="https://metamart-ar.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button
                type="primary"
                danger
                icon={<ArrowsAltOutlined />}
                key="view-in-ar"
                style={{ fontSize: "12px", padding: "4px 8px" }}
              >
                View in AR
              </Button>
            </a>
            ]}
          >
            <Meta
              title={
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-800">
                    Samsung S23
                  </span>
                  <div className="flex space-x-4">
                    {/* Options for Back with color pickers */}
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-600">Back</span>
                      <div className="flex space-x-1">
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_a(1)}
                          style={{ backgroundColor: "#0000FF" }}
                        />
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_a(2)}
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #000000",
                          }}
                        />
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_a(3)}
                          style={{ backgroundColor: "#000000" }}
                        />
                      </div>
                    </div>
                    {/* Options for Body with color pickers */}
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-600">Body</span>
                      <div className="flex space-x-1">
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_b(1)}
                          style={{ backgroundColor: "#0000FF" }}
                        />
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_b(2)}
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #000000",
                          }}
                        />
                        <div
                          className="w-6 h-6 rounded-full cursor-pointer"
                          onClick={()=>setColor_b(3)}
                          style={{ backgroundColor: "#000000" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              }
              description={
                <>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-gray-700">
                      Price:{" "}
                      <span className="text-xl font-bold text-green-600">
                        ₹49000
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center text-gray-600">
                      <strong className="mr-2 text-sm font-medium text-gray-800">
                        Processor:
                      </strong>
                      <span className="text-sm">Snapdragon 8 Gen 1</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <strong className="mr-2 text-sm font-medium text-gray-800">
                        RAM:
                      </strong>
                      <span className="text-sm">8GB</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <strong className="mr-2 text-sm font-medium text-gray-800">
                        Storage:
                      </strong>
                      <span className="text-sm">128GB/256GB</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <strong className="mr-2 text-sm font-medium text-gray-800">
                        Water Resistant:
                      </strong>
                      <span className="text-sm">Yes</span>
                    </div>
                  </div>
                </>
              }
            />
          </Card>
        </Modal>
      )}
    </>
  );
}
