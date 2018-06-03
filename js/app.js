var Calculadora ={
		display,
		numero:0,
		ultimoInput:0,
		operacion:"",
		Init(){
			display=document.querySelector('#display');
			//Asignar funcion achicar
			var buttons = document.querySelectorAll('.tecla');
			for (var i = 0; i < buttons.length; i++) {
				var item = buttons[i];
				item.onmouseover = this.OnHover;
				item.onmouseout = this.OnOut;
				item.onclick = this.OnClick;
			}
			//Damos funcion a las teclas numericas
			for (var i = 0; i < 10; i++) {
				var item = document.getElementById(i);
				item.onclick = this.OnInput;
			}
			var item;
			//Damos funcion al boton ON/C
			item=document.getElementById("on");
			item.onclick=this.OnClear;
			//Damos funcion al boton .
			item=document.getElementById("punto");
			item.onclick=this.OnDot;
			//Damos funcion al boton +/-
			item=document.getElementById("sign");
			item.onclick=this.OnSign;
			//Damos funcion a la suma
			item=document.getElementById("mas");
			item.onclick=this.OnSumar;
			//Damos funcion a la suma
			item=document.getElementById("menos");
			item.onclick=this.OnRestar;
			//Damos funcion a la suma
			item=document.getElementById("por");
			item.onclick=this.OnMultiplicar;
			//Damos funcion a la suma
			item=document.getElementById("dividido");
			item.onclick=this.OnDividir;
			//Damos funcion a la suma
			item=document.getElementById("igual");
			item.onclick=this.OnCalcular;
		},
		Show(msg){
			var text= msg.slice(0,8);
			display.innerHTML = text;
		},
		OnHover(e){
			e.target.style.padding="1px";
		},
		OnOut(e){
			e.target.style.padding="0px";
		},
		OnClick(e){
			var id=e.target.id;
		},
		OnInput(e){
			var n = e.target.id;
			if(display.innerHTML=="0"){
				display.innerHTML=n;
			}else{
				if(Calculadora.ultimoInput=="")
					display.innerHTML+=n;
				else{
					display.innerHTML=n;	
					Calculadora.ultimoInput="";
				}
			}
			Calculadora.Show(display.innerHTML);
		},
		OnClear(e){
			display.innerHTML="0";
			Calculadora.numero="";
			Calculadora.ultimoInput="";
			Calculadora.operacion="";
		},
		OnDot(e){
			var hadDot=display.innerHTML.includes(".");
			if(!hadDot){
				hadDot=true;
				display.innerHTML+=".";
				Calculadora.Show(display.innerHTML);
			}
		},
		OnSign(e){
			var hadMinus=display.innerHTML.includes("-");
			var isZero = (display.innerHTML=="0");
			if(isZero){
				return;
			}
			if(!hadMinus){
				display.innerHTML="-"+display.innerHTML;
				Calculadora.Show(display.innerHTML);
			}else{
				display.innerHTML=display.innerHTML.slice(1);
				Calculadora.Show(display.innerHTML);
			}
		},
		OnSumar(e){
			if(Calculadora.numero!="" && Calculadora.operacion=="sumar"){
				Calculadora.OnCalcular(e);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="sumar";
			Calculadora.Show("");
			//alert("["+Calculadora.numero+"]\n["+Calculadora.ultimoInput+"]\n["+display.innerHTML+"]");
		},
		OnRestar(e){
			if(Calculadora.numero!="" && Calculadora.operacion=="restar"){
				Calculadora.OnCalcular(e);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="restar";
			Calculadora.Show("");
		},
		OnMultiplicar(e){
			if(Calculadora.numero!="" && Calculadora.operacion=="multiplicar"){
				Calculadora.OnCalcular(e);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="multiplicar";
			Calculadora.Show("");
		},
		OnDividir(e){
			if(Calculadora.numero!="" && Calculadora.operacion=="dividir"){
				Calculadora.OnCalcular(e);
				return;
			}
			Calculadora.ultimoInput="";
			Calculadora.numero=display.innerHTML;
			Calculadora.operacion="dividir";
			Calculadora.Show("");
		},
		OnCalcular(e){
			if(Calculadora.operacion==""){
				return;
			}
			if(Calculadora.ultimoInput==""||Calculadora.ultimoInput===undefined){
				Calculadora.ultimoInput=display.innerHTML;
			}
			//
			var n=parseFloat(Calculadora.numero);
			var m=parseFloat(Calculadora.ultimoInput);
			var r=0;
			//
			if(Calculadora.operacion=="sumar"){
				r=n+m;
			}
			if(Calculadora.operacion=="restar"){
				r=n-m;
			}
			if(Calculadora.operacion=="multiplicar"){
				r=n*m;
			}
			if(Calculadora.operacion=="dividir"){
				r=n/m;
			}
			Calculadora.Show(r.toString());
			Calculadora.numero=r;
		//	alert("["+Calculadora.numero+"]\n["+Calculadora.ultimoInput+"]\n["+display.innerHTML+"]");
		}
};

Calculadora.Init();
