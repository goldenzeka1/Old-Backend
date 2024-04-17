import express, { Request, Response } from 'express';
import mongoose, { Document, Schema } from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase',);

interface User extends Document {
    username: string;
}

const userSchema = new Schema<User>({
    username: { type: String, unique: true, required: true },
    // Додайте інші поля, які вам необхідні
});

const UserModel = mongoose.model<User>('User', userSchema);

app.post('/signup', async (req: Request, res: Response) => {
    try {
        const { username }: { username: string } = req.body;
        const newUser = new UserModel({ username });
        await newUser.save();
        res.status(201).json({ message: 'Користувач успішно зареєстрований.' });
    } catch (error) {
        res.status(400).json({ message: 'Помилка реєстрації. Ім\'я користувача може бути некоректним або вже існує.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
