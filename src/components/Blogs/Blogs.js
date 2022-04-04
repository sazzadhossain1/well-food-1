import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>This is Blogs</h1>
            <p>Semantic Elements:Semantic Elements হোল সেই সব Elements যার একটা পূর্ণরূপ মানে রয়েছে। Semantic কিছু tag রয়েছে যা আশলে কোন কিছু কে ইঙ্গিত করে যেমন main tag, footer tag, form tag, table tag, article tag আরও অনেক রয়েছে। আমরা যখন form tag কে দেখবো তখনই বুঝতে পারবো যে আটা কেন ব্যাবহার কয়রা হয়। ঠিক একি ভাবে অন্য যেই Semantic tag রয়েছে সেগুলোকেও দেখলে বুঝা যায় যে কার কি কাজ। আমরা প্রতিটা Semantic tag এর ব্যাবহার সম্পর্কে সুস্পষ্ট ধারনা পেয়ে থাকি। তার কারনে কখন কোন tag ব্যাবহার করব সেটা সহজেই বুঝা যায়। </p>


            <p>Context Api:আমাদের যখন অনেক গুলা child component থাকে তখন drele করে ডাটা পাঠাতে হয়। কিন্তু Context এর মাধ্যমে ডাটা সরাসরি পাঠিয়ে দেয়া যায়। Context ব্যাবহার করার জন্য ৩ টা নিয়ম মেনে কাজ করতে হবে।প্রথমে createContext করতে হবে।
                পরের আর একটা নিয়ন হোল provide করতে হবে এবং তার পরে  consumer দিতে হবে। createContext দিয়ে ডাটা পাঠাবো। provider দিয়ে ডাটা pass করতে হয়। consumer ডাটাকে access করে। Context Api এভাবেই কাজ করে  </p>

        </div>
    ); 
};

export default Blogs;