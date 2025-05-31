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
          {c:"Croma",price:112900,link:"https://www.croma.com/apple-iphone-16-pro-128gb-desert-titanium-/p/309727"},
          {c:"Reliance",price:111900,link:"https://www.reliancedigital.in/product/apple-iphone-16-pro-128-gb-desert-titanium-m0xrro-8590267"},
          {c:"Vijay",price:111500,link:"https://www.vijaysales.com/p/P232302/232302/apple-iphone-16-pro-128-gb-storage-desert-titanium"},
        ]
      },
      {
        id: "mobile2",
        name: "Xiaomi Mi 15",
        specs: [
          { key: "Processor", value: "Snapdragon 888" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB/256GB" },
          { key: "Water Resistant", value: "No" },
        ],
        category: "Phones",
        company : [
          {c:"Amazon",price:64999,link:"https://www.amazon.in/Xiaomi-Triple-Camera-CrystalRes-Dynamic/dp/B0DY7JX8V2/ref=sr_1_1?crid=383IFJNJIR7Y3&dib=eyJ2IjoiMSJ9.IA6Z_GjUIiKkasglyvtnDAAXc7270XN-NbbrNUhX4Cuyjw-3h-X1LnmonyRozSD9N_pKHGJ2LEA1krk0TBp3Zw62zCmZHtPC6xTDrc3EIv7hJLMiZRK4MlD_R27-mEUZIf3iGMdQV8mRyoh0cweUP3Ww7dfj8fKsCIUAOVqmhWBv0OFvQUih9GsgL2K3jrll5LSB3Jk1jIxxArWd7MirS4VdjHOnbMumLygdckC6Lfg.sVCHbF_owjPKPiMkCzR8ImiUhtj_CcI9v0XxD05-DxU&dib_tag=se&keywords=Xiaomi%2BMi%2B15&nsdOptOutParam=true&qid=1747562624&sprefix=xiaomi%2Bmi%2B1%2Caps%2C330&sr=8-1&th=1"},
          {c:"Croma",price:64999,link:"https://www.croma.com/xiaomi-15-5g-12gb-ram-512gb-white-/p/314994"},
          {c:"Reliance",price:64999,link:"https://www.reliancedigital.in/product/xiaomi-15-5g-512-gb-12-gb-ram-white-mobile-phone-m8yhe6-9048501?internal_source=search_results"},
          {c:"Vijay",price:64999,link:"https://www.vijaysales.com/p/P238820/238821/xiaomi-15-12gb-ram-512gb-storage-white"},
        ]
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
        company : [
          {c:"Amazon",price:83999,link:"https://www.amazon.in/Samsung-Galaxy-Ultra-Green-Storage/dp/B0BT9CXXXX/ref=sr_1_1?crid=2MGI1TSEAUDG1&dib=eyJ2IjoiMSJ9.lcvJbHeQ3TwaK2eXXB1hsgWF_LjV2aV6B2-yCy9WiyZQBiYZ9tlLQsLN_xdNtuo89kUfhmbGKBF4fXOd4S2aTUvOT9ZXVu_a2Jqe_-wke4tV41XHVl0v3g-SBVnt_XLF9p54T5W21BuXDBA_DroibsYTmCvKo7lCpy1eyt2RlLZMythjLpVASLNJRGnspSJRWQxueN_GKXTjfguTOVFM6XhTx7Mdtjd9JVaB7vTu9go.Jcg37driDclfWAjzA80VTNUUKDNV0XJ3qtxpwWoHad8&dib_tag=se&keywords=Samsung%2BGalaxy%2BS23%2BUltra&nsdOptOutParam=true&qid=1747561617&sprefix=samsung%2Bgalaxy%2Bs23%2Bultra%2Caps%2C579&sr=8-1&th=1"},
          {c:"Flipkart",price:149999,link:"https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-green-256-gb/p/itm77dc35f7779a4?pid=MOBGMFFX32WUYXUJ&lid=LSTMOBGMFFX32WUYXUJEUVNIW&marketplace=FLIPKART&q=Samsung+Galaxy+S23+Ultra&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=d76d3162-6041-4ca5-bdfc-ae9c0de9709f.MOBGMFFX32WUYXUJ.SEARCH&ppt=sp&ppn=sp&ssid=gh2mhfq99s0000001747562826266&qH=78131cbff8f2868b"},
          {c:"Croma",price:109990,link:"https://www.croma.com/samsung-galaxy-s23-ultra-5g-12gb-ram-256gb-phantom-black-/p/275155"},
        ]
      },
      {
        id: "mobile",
        name: "Nokia Feature Phone",
        specs: [
          { key: "Processor", value: "Snapdragon 480" },
          { key: "RAM", value: "8GB" },
          { key: "Storage", value: "128GB" },
          { key: "Water Resistant", value: "Yes" },
        ],
        category: "Phones",
        company : [
          {c:"Amazon",price:999,link:"https://www.amazon.in/Nokia-Payments-Long-Lasting-Wireless-Charcoal/dp/B0CJMGTMHS/ref=sr_1_1_sspa?crid=3UTPD0JHCNUA8&dib=eyJ2IjoiMSJ9.mAh8stCqxJ3_JEG2IjxidHSFOz_DTOh-BauBoFpzpkEwAAWm3oUX2hkx7YoaIMhP-MsmMINAzqT-0qBrI3oy4bFM1b0iX6X4Qpolq9T9ru7gXBtStzqsLF6pXtKT2VUgOaiEpclWeDdyFDDkjLhnlJHMngp6mA7xBAzlMIBV07GwkGjyCZdnbpCOKp8JgAej7_ul4Y6DdtYO_-0B5zyezmQ2HunFhuwliIgpnj3zeMw.MKVIizCpEnRkTja73Xk-VHywQ26_u5sbvcf9CWjHj_c&dib_tag=se&keywords=Nokia%2Bphones&nsdOptOutParam=true&qid=1747561726&sprefix=nokia%2Bphon%2Caps%2C335&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"},
          {c:"Flipkart",price:989,link:"https://www.flipkart.com/nokia-105-classic-charger/p/itm16674316be4a1?pid=MOBGWZUWE4Y8CHRE&lid=LSTMOBGWZUWE4Y8CHREWYN527&marketplace=FLIPKART&q=Nokia+105+classic&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=f3081ed7-2dc7-4fea-8eb2-81281f3264d7.MOBGWZUWE4Y8CHRE.SEARCH&ppt=sp&ppn=sp&ssid=v61tsurjkw0000001747563133388&qH=565fd80f91fe4eac"},
          {c:"Croma",price:1874,link:"https://www.croma.com/nokia-150-12gmnr21a01-4mb-dual-sim-rear-camera-red-/p/248726"},
        ]
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
  