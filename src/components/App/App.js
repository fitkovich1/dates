import './App.css';
import { datesData } from "../../helper";
import ContentItem from "../ContentItem/ContentItem";
import NowIcon from '../../images/now.png';
import FutureIcon from '../../images/future.png';

const App = () => {
	return (
		<div className="App">
			<h1 className={'App-title'}>Ловля дат</h1>
			<div className={'App-subTitle'}>
				<div>
					<div>
						<img src={NowIcon} alt={'icon'}/>
						<img src={NowIcon} alt={'icon'}/>
						<img src={NowIcon} alt={'icon'}/>
					</div>
					<span>=> Можно брать(Срочная дата)</span>
				</div>
				<div>
					<div>
						<img src={FutureIcon} alt={'icon'}/>
						<img src={FutureIcon} alt={'icon'}/>
						<img src={FutureIcon} alt={'icon'}/>
					</div>
					<span>=> В ожидании(Не срочная дата)</span>
				</div>
			</div>
			<div className={'App-content'}>
				{
					datesData.map((el, i) => {
						return <ContentItem el={el} />
					})}
			</div>
		</div>
	);
}

export default App;
