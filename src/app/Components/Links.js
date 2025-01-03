function SideBarLink() {
    const labels = {
        'main-links': [
            {
                label: 'الرئيسية',
                icon: 'fa-solid fa-house'
            },
            {
                label: 'المنتجات',
                icon: 'fa-solid fa-shirt'
            },
            {
                label: 'الطلبات',
                icon: 'fa-solid fa-box'
            },
            {
                label: 'العملاء',
                icon: 'fa-solid fa-person'
            },
            {
                label: 'التقارير',
                icon: 'fa-solid fa-chart-pie'
            },
            {
                label: 'الاسئله والتقييمات',
                icon: 'fa-regular fa-comment'
            },
            {
                label: 'الصفحات التعريفيه',
                icon: 'fa-solid fa-newspaper'
            },
            {
                label: 'الادوات التسويقيه',
                icon: 'fa-solid fa-bullhorn'
            },

        ],
        'headers': [
            {
                'main-label': 'أدوات مساندة',
                'related-links': [
                    {
                        'link-icon': 'fa-solid fa-briefcase',
                        'link-label': 'خدمات التاجر'

                    }

                ]
            }
        ]
    };

    let getLink = labels["main-links"].map((link, index) => {
        return (

            <a className=" hover:bg-hoverdBg py-2" key={index} href="#"><i className={`${link.icon} ml-3`} /> {link.label} </a>
        )
    })

    let getHead = labels.headers.map((link, index) => {
        return (
            <h1 key={index}>{link["main-label"]}</h1>
        )
    })

    return (
        <div className=" h-96 flex flex-col text-white text-lg justify-around pr-7 mt-4">
            {getLink}
            {getHead}
        </div>
    )
}
export default SideBarLink