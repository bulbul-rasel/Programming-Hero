// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const showHref = () => {
    const href = confirm('Are you show href?')
    if (href == true) {
        console.log('https://github.com/bulbul-rasel/Programming-Hero');
    }
}