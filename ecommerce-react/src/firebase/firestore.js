import { db } from "./config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function getProducts(categoryId) {
  const productsRef = collection(db, "products");
  const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function createOrder(order) {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, { ...order, createdAt: serverTimestamp() });
  return docRef.id;
}
