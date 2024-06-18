import React, {useEffect, useState} from 'react';
import {IListItem} from "../../../components/listItem/listItem";
import {routes} from "../../../routes/routes";
import StatusBadge from "../../../components/statusBadge/statusBadge";
import {orderStatuses} from "../../../types/order";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import TechnologistCard from "../../../components/technologistCard/technologistCard";
import {IFormData} from "../../../types/form";

const TechnologistMaterialSelectionPage = () => {
  const handleSave = (values: string[]) => {
    console.log(values)
  }
  
  
  // const [data,setData] = useState<IListItem[]>([])
  //
  // const handleGetData = async (): Promise<IListItem[]> => {
  //   const questionnaire: IListItem[] = [
  //     {
  //       itemID: '101',
  //       link: routes.technologist.questionnaire('101')
  //     },{
  //       itemID: '102',
  //       link: routes.technologist.questionnaire('102')
  //     },{
  //       itemID: '103',
  //       link: routes.technologist.questionnaire('103')
  //     },{
  //       itemID: '104',
  //       link: routes.technologist.questionnaire('104')
  //     },
  //   ]
  //   return questionnaire
  // }
  //
  // useEffect(() => {
  //   handleGetData().then((res) => {
  //     setData(res)
  //   })
  //
  // },[])
  
  const data = [{
    id: 101,
  },{
    id: 102,
  },{
    id: 103,
  },{
    id: 104,
  },{
    id: 105,
  }] as IFormData[]
  
  const filters = {
    orderID: 101,
    height:	[150, 190],
    weight:	[60, 90],
  }
  
  const breadcrumbs = [
    {
      title: 'Подбор исходного материала',
      link: routes.technologist.questionnaires,
    },
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <TechnologistCard
        data={data}
        // @ts-ignore
        filters={filters}
        onSubmit={handleSave}
      />
    </>
  );
};

export default TechnologistMaterialSelectionPage;