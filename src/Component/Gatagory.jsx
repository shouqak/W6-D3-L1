import React from "react"
const cata = [
  {
    img: "https://m.media-amazon.com/images/I/719NCzmtGLL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Electronics",
    description: [
      "TV Televisions",
      "Air Conditioners",
      "Washing Machines",
      "Audio & Theaters",
      "Office Electronics",
    ],
  },
  {
    img: "https://m.media-amazon.com/images/I/61Yiq4GeifL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Clothings",
    description: [
      "Womens",
      "Mens",
      "Bags & Backpacks",
      "Accessories",
    ],
  },
  {
    img: "https://m.media-amazon.com/images/I/51Cl4nuESZL._AC_SX466_.jpg",
    title: "Computers",
    description: [
      "Desktop PC",
      "Laptop",
      "PC Gaming",
      "Storage & Memory",
      "PC Components",
    ],
  },
  {
    img: "https://m.media-amazon.com/images/I/71tXybfqNcL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Home & Kitchen",
    description: [
      "Furnitures",
      "Decor",
      "Cookwares",
     
    ],
  },
  {
    img: "https://m.media-amazon.com/images/I/61pNzL-8ztL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Healthy & Beauty",
    description: [
      "Makeup",
      "Skin Care",
      "Hair Care",
      "Tools & Equipments",
      "Perfumes",
    ],
  },
  {
    img: "https://m.media-amazon.com/images/I/61bffGgsnYL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Jewelry & Watch",
    description: [
         "Makeup",
      "Skin Care",
      "Hair Care",
      "Tools & Equipments",
      "Perfumes",
      
      
    ],
  },
]/* "Pendant",
      "Necklace",
      "Watch",
      "Bracelets",
      "Accessories" */

function Gatagory() {
return (
    <>
        <h1 className="p-5 m-10 text-2xl border-b">Top Of The Month</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
            {cata.map((item, idx) => (
                <div
                    className="flex flex-col sm:flex-row items-center sm:items-start border rounded-lg shadow-md h-auto sm:h-[180px] bg-white p-4"
                    key={idx}
                >
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain mb-4 sm:mb-0 sm:mr-6"
                    />
                    <div className="flex flex-col text-center sm:text-left">
                        <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                        <p className="text-gray-700 text-sm space-y-1">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </>
)
}

export default Gatagory