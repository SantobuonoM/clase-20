import admin from "firebase-admin";
import config from "../config.js";
import { getDoc, doc, setDo } from "firebase-admin/firestore";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorFirebase {
  constructor() {
    this.db = getFirestore();
  }

  async listar(id) {
    try {
      const product = await db.collection("products").where("id", "==", id);
      const idProduct = product.get();
      console.log("Producto encontrado", idProduct);
      return idProduct;
    } catch (error) {
      throw new Error(`Error al buscar el producto: ${error}`);
    }
  }

  async listarAll() {
    try {
      const productsList = await db.collection("products").get();
      console.log("Estos son los productos encontrados", productsList);
      return productsList;
    } catch (error) {
      throw new Error(`Error al buscar productos: ${error}`);
    }
  }

  async guardar(nuevoElem) {
    try {
      const res = await db.collection("products").doc().set(nuevoElem);
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }
  async actualizar(nuevoElem) {
    try {
      const res = await db.collection("products").update(nuevoElem);
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async borrar(id) {
    try {
      const product = await db
        .collection("products")
        .where("id", "==", id)
        .delete();
      console.log("Producto borrado", product);

      return product;
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async borrarAll() {
    // version fea e ineficiente pero entendible para empezar
    try {
      const docs = await this.listarAll();
      const ids = docs.map((d) => d.id);
      const promesas = ids.map((id) => this.borrar(id));
      const resultados = await Promise.allSettled(promesas);
      const errores = resultados.filter((r) => r.status == "rejected");
      if (errores.length > 0) {
        throw new Error("no se borró todo. volver a intentarlo");
      }
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`);
    }
  }

  async desconectar() {}
}

export default ContenedorFirebase;
/** funcion getById */
/** funcion getAll */
/** funcion post */
/** funcion put */
/** funcion delete */
