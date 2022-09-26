/** leer del config o ENV la variable de tipo persistenciay 
 * exportar el controlador correspondiente */

 import config from '../config'

 let personasDao
 
 switch (config.MODO_PERSISTENCIA) {
     case 'json':
         const { default: PersonasDaoArchivo } = await import('./PersonasDaoArchivo.js.js')
         personasDao = new PersonasDaoArchivo(config.fileSystem.path)
         break
     case 'firebase':
         const { default: PersonasDaoFirebase } = await import('./PersonasDaoFirebase.js.js')
         personasDao = new PersonasDaoFirebase()
         break
     case 'mongodb':
         const { default: PersonasDaoMongoDb } = await import('./PersonasDaoMongoDb.js.js')
         personasDao = new PersonasDaoMongoDb()
         break
     default:
         const { default: PersonasDaoMem } = await import('./PersonasDaoMem.js.js')
         personasDao = new PersonasDaoMem()
         break
 }
 
 export { personasDao }