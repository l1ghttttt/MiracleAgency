import {create} from "zustand";

const useStore = create((set) => ({
    ShowCatalog: false,
    toggleCatalog: (target:boolean) => set({ ShowCatalog: target }),
    Content: [
        {
            "id": 1,
            "name": "Tech Innovations",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Tech_Innovations",
            "description": "Компания, специализирующаяся на разработке инновационных технологий."
        },
        {
            "id": 2,
            "name": "Green Energy Solutions",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Green_Energy_Solutions",
            "description": "Компания, занимающаяся производством экологически чистой энергии."
        },
        {
            "id": 3,
            "name": "Creative Media Group",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Creative_Media_Group",
            "description": "Медиагруппа, специализирующаяся на креативной индустрии и развлечениях."
        },
        {
            "id": 4,
            "name": "Quantum Computing Corp",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Quantum_Computing_Corp",
            "description": "Развитие квантовых компьютеров и технологий."
        },
        {
            "id": 5,
            "name": "Space Exploration Ventures",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Space_Exploration_Ventures",
            "description": "Исследование космоса и разработка космической техники."
        },
        {
            "id": 6,
            "name": "BioTech Advances",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=BioTech_Advances",
            "description": "Инновации в области биотехнологии."
        },
        {
            "id": 7,
            "name": "EcoFriendly Products",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=EcoFriendly_Products",
            "description": "Производство экологически чистых товаров."
        },
        {
            "id": 8,
            "name": "Smart Home Solutions",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Smart_Home_Solutions",
            "description": "Разработка умных домашних систем."
        },
        {
            "id": 9,
            "name": "Virtual Reality Creators",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Virtual_Reality_Creators",
            "description": "Создание виртуальной реальности для различных приложений."
        },
        {
            "id": 10,
            "name": "Artificial Intelligence Lab",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Artificial_Intelligence_Lab",
            "description": "Исследования и разработки в области искусственного интеллекта."
        },
        {
            "id": 11,
            "name": "Cyber Security Experts",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Cyber_Security_Experts",
            "description": "Обеспечение кибербезопасности для организаций."
        },
        {
            "id": 12,
            "name": "Digital Marketing Masters",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Digital_Marketing_Masters",
            "description": "Профессиональный маркетинг в цифровой среде."
        },
        {
            "id": 13,
            "name": "Cloud Computing Services",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Cloud_Computing_Services",
            "description": "Предоставление услуг облачных вычислений."
        },
        {
            "id": 14,
            "name": "Robotics Engineering",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Robotics_Engineering",
            "description": "Разработка и производство робототехники."
        },
        {
            "id": 15,
            "name": "Data Science Analytics",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Data_Science_Analytics",
            "description": "Анализ данных для принятия обоснованных решений."
        },
        {
            "id": 16,
            "name": "Wearable Technology Innovators",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Wearable_Technology_Innovators",
            "description": "Разработка инновационных носимых технологий."
        },
        {
            "id": 17,
            "name": "Renewable Resources Inc.",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Renewable_Resources_Inc",
            "description": "Использование возобновляемых ресурсов для устойчивого развития."
        },
        {
            "id": 18,
            "name": "Financial Tech Startups",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Financial_Tech_Startups",
            "description": "Инновации в финансовой сфере через технологии."
        },
        {
            "id": 19,
            "name": "Educational Software Developers",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Educational_Software_Developers",
            "description": "Создание программного обеспечения для образования."
        },
        {
            "id": 20,
            "name": "Healthcare Technology Providers",
            "logo": "https://api.dicebear.com/9.x/icons/svg?seed=Healthcare_Technology_Providers",
            "description": "Технологии для улучшения здравоохранения."
        }
    ],
    zoom: false,
    toggleZoom: (target:boolean) => set({ zoom: target }),
    pause: false,
    togglePause: (target:boolean) => set({ pause: target }),
}))

export default useStore;