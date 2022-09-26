import mongoose from "mongoose";
import config from "../config.js";
import { personaSchema } from "../models/usuario.model.js";
/** inicializar conexion a db */

class ContenedorMongoDb {
  /** crea la tabla/collection a persistir */

  constructor() {
    this.usuarioModel = mongoose.model("personas", personaSchema);
  }

  /** funcion getById */
  async listar(id) {
    try {
      const prod = await this.usuarioModel.findById(id);
      console.log("Producto encontrado", prod);
      return prod;
    } catch (error) {
      throw new Error(`Error al buscar el producto: ${error}`);
    }
  }

  /** funcion getAll */
  async listarAll() {
    try {
      const prods = await this.usuarioModel.find();
      console.log("Producto encontrado", prods);
    } catch (error) {
      throw new Error(`Error al buscar los productos : ${error}`);
    }
  }
  /** funcion post */

  async guardar(nuevoElem) {
    try {
      const prod = await this.usuarioModel.create(nuevoElem);
      console.log("Producto guardado", prod);
      return prod;
    } catch (error) {
      throw new Error(`Error al guardar el producto : ${error}`);
    }
  }
  /** funcion put */

  async actualizar(id, nuevoElem) {
    try {
      const upd = await this.usuarioModel.updateOne(
        {
          _id: id,
        },
        {
          $set: nuevoElem,
        }
      );
      console.log("Producto actualizado", upd);
      return up;
    } catch (error) {
      throw new Error(`Error al actualizar el producto : ${error}`);
    }
  }
  /** funcion delete */

  async borrar(id) {
    return this.usuarioModel.deleteOne({
      _id: id,
    });
  }
  /** funcion delete */

  async borrarAll() {
    return this.usuarioModel.deleteMany({});
  }
}

export default ContenedorMongoDb;
