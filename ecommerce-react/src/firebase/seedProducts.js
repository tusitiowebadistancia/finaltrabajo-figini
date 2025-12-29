import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const productsSeed = [
  {
    title: 'Laptop Nova 14” i5',
    description: "Ultrabook liviana para estudio y trabajo. 16GB RAM, 512GB SSD.",
    price: 899,
    stock: 6,
    category: "laptops",
    image: "https://picsum.photos/seed/laptop1/600/400",
  },
  {
    title: 'Laptop Titan 15” i7',
    description: "Potencia para multitarea y proyectos pesados. 32GB RAM, 1TB SSD.",
    price: 1399,
    stock: 4,
    category: "laptops",
    image: "https://picsum.photos/seed/laptop2/600/400",
  },
  {
    title: "Auriculares Pulse Pro",
    description: "Over-ear con cancelación de ruido y batería de 30h.",
    price: 199,
    stock: 10,
    category: "audio",
    image: "https://picsum.photos/seed/audio1/600/400",
  },
  {
    title: "Parlante Mini Boom",
    description: "Bluetooth compacto, resistente al agua (IPX7).",
    price: 79,
    stock: 12,
    category: "audio",
    image: "https://picsum.photos/seed/audio2/600/400",
  },
  {
    title: "Teclado Mecánico K87",
    description: "Switches táctiles, retroiluminado, formato TKL.",
    price: 89,
    stock: 8,
    category: "accesorios",
    image: "https://picsum.photos/seed/acc1/600/400",
  },
  {
    title: "Mouse Gamer VX",
    description: "Sensor 16000 DPI, 6 botones programables.",
    price: 49,
    stock: 15,
    category: "accesorios",
    image: "https://picsum.photos/seed/acc2/600/400",
  },
  {
    title: "Monitor 24” IPS",
    description: "Full HD, 75Hz, excelente para oficina y estudio.",
    price: 159,
    stock: 5,
    category: "accesorios",
    image: "https://picsum.photos/seed/acc3/600/400",
  },
  {
    title: "Hub USB-C 7 en 1",
    description: "HDMI, USB 3.0, SD/MicroSD y PD charging.",
    price: 39,
    stock: 20,
    category: "accesorios",
    image: "https://picsum.photos/seed/acc4/600/400",
  },
  {
    title: "Micrófono Studio Lite",
    description: "USB plug-and-play, ideal para streaming y clases.",
    price: 69,
    stock: 0,
    category: "audio",
    image: "https://picsum.photos/seed/audio3/600/400",
  },
  {
    title: "Webcam HD 1080p",
    description: "Autofocus, micrófono integrado, ideal para videollamadas.",
    price: 55,
    stock: 9,
    category: "accesorios",
    image: "https://picsum.photos/seed/acc5/600/400",
  },
];

export async function seedProducts() {
  const productsRef = collection(db, "products");

  const results = await Promise.allSettled(
    productsSeed.map((product) => addDoc(productsRef, product))
  );

  const created = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value.id);

  const errors = results
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason);

  console.log("Seed OK:", created.length, created);
  if (errors.length) console.error("Seed FAIL:", errors);

  return { created, errors };
}
