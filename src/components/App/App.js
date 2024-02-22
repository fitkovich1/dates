import './App.css';
import { datesData } from "../../helper";
import ContentItem from "../ContentItem/ContentItem";

const App = () => {
	return (
		<div className="App">
			<h1 className={'App-title'}>Ловля дат</h1>
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
