await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

const personaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const usuarioModel = model("personas", personaSchema);
