const productsData = {
    items: [
      {
        id: "mobile3",
        name: "iPhone 16 Pro",
        specs: [
          { key: "Processor", value: "Apple A16 Bionic" },
          { key: "RAM", value: "6GB" },
          { key: "Storage", value: "128GB/256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
        company : [
          {c:"Amazon",price:112900,link:"https://www.amazon.in/iPhone-16-Pro-128-GB/dp/B0DGJH94KM/ref=sr_1_1_sspa?crid=1P4MEVG8BTT8L&dib=eyJ2IjoiMSJ9.LAi5z5vs1wlGTD04ksrOBFsDVGXLvr_lsQeKhUH6OgrI3BMPAob0l5ozF-F8h_ELTTkGSeAOONZ713sNlBSo3-k975IXBR5NuhbkbVRKlOXXXx38Zy3GsgCEs6R_dzugnINmq18eVPTF8lsNT2Wb9oFQBdkcproO2rpbkWVc_IPA45J_l_rFH0ivHl5FVefjxCeDT6h96aNfwY7Gw1K6VfFEe2m1iZdEdHPXvsDWyw8.tWcY3mBSrj_ouNcQBqjh_n9raOKxMAHBQxdLKd6yF_I&dib_tag=se&keywords=iphone%2B16%2Bpro&qid=1747561029&sprefix=iphone%2B16pro%2Caps%2C588&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"},
          {c:"Flipkart",price:112900,link:"https://www.flipkart.com/apple-iphone-16-pro-desert-titanium-128-gb/p/itm5a8453e89cbd4?pid=MOBH4DQFSDYNVH5U&lid=LSTMOBH4DQFSDYNVH5UFZYHLF&marketplace=FLIPKART&q=iphone+16+pro&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=b8ad85d7-f063-40c9-aef8-bf3d3b3fdce5.MOBH4DQFSDYNVH5U.SEARCH&ppt=clp&ppn=mobile-phones-store&ssid=8xy0o9spyo0000001747561187696&qH=6f0b50cc832ce851"},
          {c:"Chroma",price:112900,link:"https://www.croma.com/apple-iphone-16-pro-128gb-desert-titanium-/p/309727"},
          {c:"Reliance",price:111900,link:"https://www.reliancedigital.in/product/apple-iphone-16-pro-128-gb-desert-titanium-m0xrro-8590267"},
          {c:"Vijay",price:111500,link:"https://www.vijaysales.com/p/P232302/232302/apple-iphone-16-pro-128-gb-storage-desert-titanium"},
        ]
      },
      {
        id: "mobile2",
        name: "Xiaomi Mi 11",
        specs: [
          { key: "Processor", value: "Snapdragon 888" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB/256GB" },
          { key: "Water Resistant", value: "No" },
        ],
        category: "Phones",
      },
      {
        id: "mobile4",
        name: "Samsung Galaxy S23 Ultra",
        specs: [
          { key: "Processor", value: "Snapdragon 8 Gen 2" },
          { key: "RAM", value: "12GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
      },
      {
        id: "mobile",
        name: "Nokia X20",
        specs: [
          { key: "Processor", value: "Snapdragon 480" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
      },
      {
        id: "laptop1",
        name: "Apple MacBook Air (M2, 2022)",
        specs: [
          { key: "Processor", value: "Apple M2" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "256GB/512GB" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
      },
      {
        id: "laptop2",
        name: "Lenovo IdeaPad Flex 5",
        specs: [
          { key: "Processor", value: "AMD Ryzen 5 5500U" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "512GB SSD" },
          { key: "Touchscreen", value: "Yes" },
        ],
        category: "Laptops",
      },
      {
        id: "laptop3",
        name: "HP Victus 16",
        specs: [
          { key: "Processor", value: "AMD Ryzen 7 5800H" },
          { key: "RAM", value: "16GB" },
          { key: "Storage", value: "1TB SSD" },
          { key: "Touchscreen", value: "No" },
        ],
        category: "Laptops",
      },
      {
        id: "speaker3",
        name: "JBL Charge 5",
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "20 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
      },
      {
        id: "speaker2",
        name: "Sony SRS-XB43",
        specs: [
          { key: "Type", value: "Portable Bluetooth" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Water Resistant", value: "Yes" },
          { key: "Built-in Microphone", value: "No" },
        ],
        category: "Speakers",
      },
      {
        id: "headphones",
        name: "Sony WH-1000XM5",
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "30 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones3",
        name: "Skullcandy Crusher Evo",
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "40 hours" },
          { key: "Noise Cancellation", value: "No" },
          { key: "Foldable", value: "Yes" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones2",
        name: "Bose QuietComfort 45",
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "24 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "headphones4",
        name: "Jabra Elite 85h",
        specs: [
          { key: "Type", value: "Over-Ear" },
          { key: "Battery Life", value: "36 hours" },
          { key: "Noise Cancellation", value: "Yes" },
          { key: "Foldable", value: "No" },
        ],
        category: "Headphones",
      },
      {
        id: "tv3",
        name: "Samsung QN90B Neo QLED",
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "tv2",
        name: "LG OLED C2",
        specs: [
          { key: "Screen Size", value: "65 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "tv1",
        name: "Panasonic TX-55HZ2000",
        specs: [
          { key: "Screen Size", value: "55 inches" },
          { key: "Resolution", value: "4K" },
          { key: "Smart TV", value: "Yes" },
          { key: "HDR Support", value: "Yes" },
        ],
        category: "Television",
      },
      {
        id: "console2",
        name: "PlayStation 5",
        specs: [
          { key: "Storage", value: "825GB SSD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualSense" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",
      },
      {
        id: "PSConsole",
        name: "PlayStation 4 Pro",
        specs: [
          { key: "Storage", value: "1TB HDD" },
          { key: "Resolution", value: "4K" },
          { key: "Controller", value: "DualShock 4" },
          { key: "VR Support", value: "Yes" },
        ],
        category: "Gaming Consoles",
      },
    ],
  };
  
  export default productsData;
  