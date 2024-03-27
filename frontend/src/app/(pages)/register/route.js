import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


// 初始化 Supabase 客户端
const supabase = createClientComponentClient();


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            email,
            password,
            firstName,
            lastName,
            position } = req.body;

        // 在 Supabase 中注册用户
        const { user, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (signUpError) return res.status(400).json({ error: signUpError.message });

        // 在 User 表中添加用户的其他信息
        const { data: userProfile, error: profileError } = await supabase
            .from('User')
            .insert([
                {
                    email,
                    firstName,
                    lastName,
                    position
                },
            ]);

        if (profileError) return res.status(400).json({ error: profileError.message });

        res.status(200).json({ message: 'Signup successful', user: userProfile });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
