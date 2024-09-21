"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const productsRoute_1 = __importDefault(require("./routes/productsRoute"));
const app = (0, express_1.default)();
const PORT = 5000;
//middlewire
app.use(express_1.default.json());
// Define a function to start the server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to the database
        yield (0, db_1.default)();
        app.use('/v1', productsRoute_1.default);
        app.get('/', (req, res) => {
            res.json("My Curd is on Fire");
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1); // Exit the process if the connection fails
    }
});
// Call the function to start the server
startServer();
