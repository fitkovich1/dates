import { useEffect, useState } from "react";
import clipboardCopy from 'clipboard-copy';
import copyIcon from '../../images/copy_icon.svg';
import copyCheckIcon from '../../images/copy_check.svg';
import './index.css';


const ContentItem = ( { el } ) => {
	
	const [isCopiedLogin, setIsCopiedLogin] = useState(false);
	const [isCopiedPass, setIsCopiedPass] = useState(false);
	
	useEffect(() => {
		let timeoutLoginId;
		let timeoutPassId;
		
		if (isCopiedLogin) {
			timeoutLoginId = setTimeout(() => setIsCopiedLogin(false), 2000);
		}
		
		if (isCopiedPass) {
			timeoutPassId = setTimeout(() => setIsCopiedPass(false), 2000);
		}
		
		return () => {
			clearTimeout(timeoutLoginId);
			clearTimeout(timeoutPassId);
		}
	}, [isCopiedLogin, isCopiedPass]);
	
	const handleCopyClick = async ( text ) => {
		try {
			await clipboardCopy(text);
		} catch (err) {
			console.error('Не удалось скопировать текст:', err);
		}
	};
	
	return (
		<div className={'App-content-item'}>
			<div>
				<p>{el.name} ({el.dateOfBirth})</p>
			</div>
			<div className={'App-content-item-logPass'}>
				<p>Логин: <span className={'green'}>{el.login}</span></p>
				{isCopiedLogin ?
					<img src={copyCheckIcon} alt={'copyIcon'}/> :
					<img src={copyIcon} alt={'copyIcon'} onClick={() => {
						handleCopyClick(el.login).then(res => {
							setIsCopiedLogin(true);
						});
					}}/>}
			</div>
			<div className={'App-content-item-logPass'}>
				<p>Пароль: <span className={'green'}>{el.password}</span></p>
				{isCopiedPass ?
					<img src={copyCheckIcon} alt={'copyIcon'}/> :
					<img src={copyIcon} alt={'copyIcon'} onClick={() => {
						handleCopyClick(el.password).then(res => {
							setIsCopiedPass(true);
						})
					}}/>
				}
			</div>
			<p>Период взятия: <span className={'red'}>{el.range}</span></p>
			<p>Примечание: {el.notation}</p>
		</div>
	)
}

export default ContentItem;
