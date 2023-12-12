import './UserTransGraph.css'
import {IUserTransItem} from "../../../shared/types/users.ts";
import {Area, AreaChart, Brush, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {convertDateTime} from "../../../shared/utils/converDateTime.ts";

interface IProps {
   data: IUserTransItem[]
}

const UserTransGraph = (props: IProps) => {

   const { data } = props

   return (
      <ResponsiveContainer width="100%" height={275} className={'UserTransGraph'}>
         <AreaChart data={data}>
            <defs>
               <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="15%" stopColor="var(--app-primary)" stopOpacity={1}/>
                  <stop offset="85%" stopColor="var(--app-bg-secondary)" stopOpacity={0}/>
               </linearGradient>
            </defs>
            <CartesianGrid
               strokeDasharray="5 0"
               stroke={"var(--app-gray)"}
            />
            <YAxis
               fontSize={12}
               width={40}
               orientation={"right"}
               hide={false}
               stroke={'var(--app-gray)'}
               //тут показываем мин и макс значение графика
               domain={['dataMin', 'dataMax']}
            />
            <XAxis
               dataKey={elem => convertDateTime(elem.created_at)?.slice(0, 10)}
               fontSize={12}
               stroke={'var(--app-gray)'}
            />
            <Area
               dot={false}
               type="natural"
               strokeWidth={2}
               dataKey="amount"
               fill="url(#gradient)"
               stroke="var(--app-primary)"
            />
            <Brush
               height={14}
               fill={"#1A1A1A"}
               stroke={"var(--app-primary)"}
            />
         </AreaChart>
      </ResponsiveContainer>
   );
};

export default UserTransGraph;