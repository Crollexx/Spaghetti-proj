import React, {useEffect, useState} from 'react';
import DefaultList from "../../../components/list/list";
import {IListItem} from "../../../components/listItem/listItem";
import {routes} from "../../../routes/routes";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import {getQuestionnaires} from "../../../api/questionnaire";

const BrigadierQuestionnairesPage = () => {
  
  const [data, setData] = useState<IListItem[]>([])
  const [filter, setFilter] = useState(false);
  
  const handleGetData = async (filter: boolean): Promise<IListItem[]> => {
    const data = await getQuestionnaires(filter);
    
    return  data?.map(({ id,}) => ({
      link: routes.brigadier.questionnaire(id),
      itemID: id
    }))
  }
  
  useEffect(() => {
    handleGetData(filter).then((res) => {
      setData(res)
    })
  },[filter])
  
  const breadcrumbs = [
    {
      title: 'Анкеты',
      link: routes.brigadier.questionnaires,
    },
  ]
  
  return (
    <>
      <Breadcrumbs values={breadcrumbs}/>
      <DefaultList
        data={data}
        onSelectFilter={() => {
          setFilter(true)
        }}
        onClearFilter={() => {
          setFilter(false)
        }}
      />
    </>
  );
};

export default BrigadierQuestionnairesPage;