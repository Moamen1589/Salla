import '../Styles/Options.css'
function Option() {
    const options = [
        {
            icon: "fa-solid fa-gear",
            text: "المحفظة والفواتير",
            description: "رصيد المحفظة، الفواتير، اشتراكاتك",
        },
        {
            icon: "fa-solid fa-truck",
            text: "طرق الدفع",
            description: "تفعيل المدفوعات الإلكترونية",
        },
        {
            icon: "fa-solid fa-wallet",
            text: "خيارات الشحن والتوصيل",
            description: "الربط مع شركات الشحن",
        },
        {
            icon: "fa-solid fa-cogs",
            text: "الإعدادات الأساسية",
            description: "الربط، الشعار، أقسام المتجر",
        },
        {
            icon: "fa-solid fa-star",
            text: "إعدادات التقييم",
            description: "تحديد إعدادات التقييم الخاصة بمتجرك",
        },
        {
            icon: "fa-solid fa-coins",
            text: "العملات",
            description: "العملات المتاحة في المتجر",
        },
        {
            icon: "fa-solid fa-language",
            text: "اللغات",
            description: "تفعيل تعدد اللغات في المتجر",
        },
        {
            icon: "fa-solid fa-store",
            text: "خيارات المتجر",
            description: "خيارات التحكم في المتجر",
        },
        {
            icon: "fa-solid fa-shipping-fast",
            text: "قيود شركات الشحن",
            description: "إضافة قيود محددة لشركات الشحن",
        },
        {
            icon: "fa-solid fa-tools",
            text: "وضع الصيانة",
            description: "إغلاق المتجر بشكل مؤقت",
        },
        {
            icon: "fa-solid fa-globe",
            text: "إعدادات الدومين",
            description: "التحكم في إعدادات دومين المتجر",
        },
        {
            icon: "fa-solid fa-shopping-cart",
            text: "خيارات الطلب",
            description: "إضافة حقول مخصصة في سلة المشتريات",
        },
        {
            icon: "fa-solid fa-clipboard",
            text: "الحقول المخصصة",
            description: "إضافة حقول مخصصة للمنتجات والطلبات",
        },
        {
            icon: "fa-solid fa-file-invoice",
            text: "إعدادات فواتير المتجر",
            description: "التحكم بالفواتير الصادرة مع الطلبات",
        },
        {
            icon: "fa-solid fa-bell",
            text: "الإشعارات",
            description: "إعداد الإشعارات الخاصة بك",
        },
        {
            icon: "fa-solid fa-money-check",
            text: "قيود الدفع",
            description: "إضافة قيود الدفع",
        },
        {
            icon: "fa-solid fa-mobile-alt",
            text: "تطبيق محلي",
            description: "إعدادات ربط المتجر مع تطبيق محلي",
        },
    ];
    const getOption = options.map((op, index) => {
        return (
            
                <div key={index} className="option border border-color p-10">
                    <div className="icon h-1/2 flex justify-center items-center text-3xl text-second_Color">
                        <i className={`${op.icon}`} />
                    </div>
                    <div  className='info text-center mt-2'>
                        <h1 className=' text-gray-600 text-xl'>{op.text}</h1>
                        <p className='text-third_color'>{op.description}</p>
                    </div>
                </div>
            
        )
    })
    return (
        <div className="op-container ">
            {getOption}
        </div>
    )
}
export default Option