import express, { Application } from "express";
import productsRoutes from "../routes/products";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    products: "/api/products",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Metodos iniciales
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del BODY
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.products, productsRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}!!!`);
    });
  }
}

export default Server;
