var vmx = vmx || {};

vmx.script = (function () {
	const prodWarn = () => {
		console.log("%c Refactor Vanilla JS & CSS modules for production!", "color:#4373c7; font-size: 24px; font-weight: bold;text-shadow: 0px 0px 1px #000;");
	};

	const setDrawerPositionRight = (isRight) => {
		const rootEl = document.getElementById("root");
		if(isRight){
			rootEl.classList.add("drawer-end");
		}else{
			rootEl.classList.remove("drawer-end");
		}
	};

	const setBodyOverflow = (isToggled) => {
		if(isToggled){
			document.body.style.overflow = "hidden";
		}else{
			document.body.style.overflow = "";
		}
	};

	return {
		prodWarn,
		setDrawerPositionRight,
		setBodyOverflow
	};
})();

document.addEventListener('DOMContentLoaded', function(){
	vmx.script.prodWarn();
});