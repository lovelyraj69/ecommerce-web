import React, { useState } from 'react'
import Fashion from './productCom/Fashion';
import Electronics from './productCom/Electronics';
import Accessories from './productCom/Accessories';
import Appliances from './productCom/Appliances';
import Furniture from './productCom/Furniture';
import Search from './Search';

export default function SwitchPage() {
    const [tab,setTab] = useState('');
    switch (tab) {
        case 'fashion':
            return <Fashion setTab={setTab} />
        case 'electronic':
            return <Electronics setTab={setTab} />
        case 'accessories':
            return <Accessories setTab={setTab} />
        case 'applainaces':
            return <Appliances setTab={setTab} />
        case 'furniture':
            return <Furniture setTab={setTab} />
        default:
            return <Search setTab={setTab} />
    }
}
