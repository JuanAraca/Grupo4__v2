class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

   INICIO=null;
   FIN=null;

   canvas3=null;

   constructor(canvas) {
        this.canvas3 = this.responsive(canvas);
   }///////////////////////////////////////////
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
   }///////////////////////////////////////////
   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.ligaDer;
    }
    
    return encontrado;
   }///////////////////////////////////////////
   insertar_inicio(DATO){

        if(this.INICIO==null){//Algoritmo Jorge
            
            var Q=new Nodo();
            Q.info=DATO;
            
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{//Algoritmo cairo
            
            var P=this.INICIO;
                
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;//Opcional no es necesario
            P=Q;
            
            this.INICIO=P;    
        }
    }///////////////////////////////////////////
    insertar_final(DATO){
        var F=this.FIN;
                
        var Q=new Nodo();
        Q.info=DATO;
        Q.ligaIzq=F;
        F.ligaDer=Q;
        Q.ligaDer=null;//Opcional no es necesario
        F=Q;
        
        this.FIN=F; 
    }/////////////////////////////////////////////
    insertar_antes_x(DATO,X){

        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        
        var P=this.INICIO;
        
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            
            if(P==Q){//LA lista tiene solo un elemento
                P=T;
                T.ligaIzq=null;//OPCIONAL 
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else{

            throw new Error("EL elemento no se encuentra en la lista");
        }
        
        this.INICIO=P;
    }///////////////////////////////////////////
    insertar_despues_x (DATO,X){
        var P=this.INICIO;
        var F=this.FIN;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.ligaDer!=null){
                Q=Q.ligaDer;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
            
            ////------------------
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                F=T;
            }
            else{
                T.ligaDer.ligaIzq=T;    
            }
            ////----------------------
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
        this.FIN=F;
    }//////////////////////////////////////////////////////////////////
    eliminar_inicio(){
        var P=this.INICIO;
        var F=this.FIN

        if(P==F){//Si solo es un nodo
            P=null;
            F=null;
        }else{//Si hay mas de un nodo
            var Q=P;
            P=Q.ligaDer;
            P.ligaIzq=null;//Necesario
            Q=null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        }

        this.INICIO = P;
        this.FIN = F;
    }///////////////////////////////////////////// 
    eliminar_ultimo(){
        var P=this.INICIO;
        var F=this.FIN

        if(P==F){//Si solo es un nodo
            P=null;
            F=null;
        }else{//Si hay mas de un nodo
            var Q=F;
            F=Q.ligaIzq;
            F.ligaDer=null;//Necesario
            Q=null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        }
        
        this.INICIO = P;
        this.FIN = F;
    }///////////////////////////////////////////// 
    eliminar_x(X){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(P==F){
                P=null;
                F=null;
            }
            else{
                if(P == Q) {//Si es el primero
                    P = Q.ligaDer;
                    P.ligaIzq=null;
                } else {
                    if(F == Q){//Si es el ultimo
                        F = Q.ligaIzq;
                        F.ligaDer=null;
                    }
                    else{
                        var T=Q.ligaIzq;
                        var R=Q.ligaDer;
                        T.ligaDer=R;
                        R.ligaIzq=T;
                    }
                }
                Q=null;
            }
            
            
        }
        else{
            throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO =P;
        this.FIN =F;
    }///////////////////////////////////////////
    eliminar_antes_x(X){
        var P=this.INICIO;
        if(P.info==X){
            throw new Error("EL ELEMENTO NO TIENE UN NUMERO ANTERIOR");
        } else{
            var Q=P;
            var BAND=1;
            while(Q.info!=X && BAND==1){
                if(Q.ligaDer!=null){
                    Q=Q.ligaDer;
                } else  BAND=0;
            }
            if(BAND==0){
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            } 
            else{
                if(P.ligaDer==Q){//Si quiere eliminar al primero
                    P=Q;
                    P.ligaIzq=null;
                    Q=null;
                } else {
                    var T=Q.ligaIzq;
                    var R=T.ligaIzq;
                    R.ligaDer=Q;
                    Q.ligaIzq=R;
                    T=null;
                }
            } 
        }
        this.INICIO =P;
        }///////////////////////////////////////////
    eliminar_despues_x(X){
        var F=this.FIN;
        var P=this.INICIO;
        if(F.info==X){
            throw new Error("EL ELEMENTO NO TIENE UN NUMERO POSTERIOR");
        } else{
            var Q=P;
            var BAND=1;
            while(Q.info!=X && BAND==1){
                if(Q.ligaDer!=null){
                    Q=Q.ligaDer;
                } else  BAND=0;
            }
            if(BAND==0){
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            } 
            else {
                if(F.ligaIzq==Q){//Si quiere eliminar el final
                    F=Q;
                    F.ligaDer=null;
                    Q=null;
                } else {
                    var T=Q.ligaDer;
                    var R=T.ligaDer;
                    R.ligaIzq=Q;
                    Q.ligaDer=R;
                    T=null;
                }
            }
            
        }
        
        this.INICIO =P;
        this.FIN =F;
        }///////////////////////////////////////////
    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var F=this.FIN;
        var cad="";
        while(F!=null){
            cad+=F.info+"::";
            F=F.ligaIzq;
        }
        
        console.log(cad);
    }/////////////////////////////////////////////
    dibujarNodos(valor){

        var canvas3=this.canvas3;
        var ctx = canvas3.getContext('2d');
        var	tmp=this.INICIO;

        var x=0;
        var y=0;
        var ctd=0;
        
        
        ctx.clearRect(0, 0, canvas3.width, canvas3.height);//limpia el canva 

        var nodo=null;

        while(tmp!=null){
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(96, 153, 156)";
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
             //Dibujar rectangulo
             ctx.beginPath();
             ctx.fillStyle = "rgb(81, 215, 245)";
             ctx.fillRect (x,y, 55,30);
            }    

            //texto
            ctx.fillStyle="black";
            ctx.font = '20px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();
            
            if(x>canvas3.width-150){//Flecha de una fila a otra
                //Dibujar flecha Derecha
                //linea de la flecha
                ctx.beginPath();
                ctx.moveTo(x+55,y+10);//linea derecha
                ctx.lineTo(x+55+30,y+10);
                ctx.moveTo(x+55+30,y+10);//linea abajo
                ctx.lineTo(x+55+30,y+55);
                ctx.moveTo(x+55+30,y+55);//linea izquerda
                ctx.lineTo(35,y+55);
                ctx.moveTo(35,y+55);//linea abajo
                ctx.lineTo(35,y+75);
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.moveTo(30,y+70);
                ctx.lineTo(35,y+75);
                ctx.lineTo(40,y+70);
                ctx.closePath();
                ctx.fill();
                //Dibujar flecha Izquierda
                //linea de la flecha
                ctx.beginPath();
                ctx.moveTo(x+55,y+20);//linea derecha
                ctx.lineTo(x+55+20,y+20);
                ctx.moveTo(x+55+20,y+20);//linea abajo
                ctx.lineTo(x+55+20,y+45);
                ctx.moveTo(x+55+20,y+45);//linea izquerda
                ctx.lineTo(25,y+45);
                ctx.moveTo(25,y+45);//linea abajo
                ctx.lineTo(25,y+75);
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.moveTo(x+55+5,y+15);
                ctx.lineTo(x+55,y+20);
                ctx.lineTo(x+55+5,y+25);
                ctx.closePath();
                ctx.fill();
            }
            else{
                if(tmp.ligaDer!=null){
                    //Dibujar flecha Derecha
                    //linea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+10);
                    ctx.lineTo(x+55+20,y+10);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x+55+20,y+5);
                    ctx.lineTo(x+55+20+5,y+10);
                    ctx.lineTo(x+55+20,y+15);
                    ctx.closePath();
                    ctx.fill();
                    //Dibujar flecha Izquierda
                    //linea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+20);
                    ctx.lineTo(x+55+20+5,y+20);
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x+55+5,y+15);
                    ctx.lineTo(x+55,y+20);
                    ctx.lineTo(x+55+5,y+25);
                    ctx.closePath();
                    ctx.fill();
                }
            }
            
            tmp=tmp.ligaDer;
            
            if(x>canvas3.width-150){//Para una nueva fila
                ctd=0;
                x=0;
                y=y+75;
            }
            else{
                x=80*++ctd;
            }
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(81, 215, 245)";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '20px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },2000);
           
        }
        
    }/////////////////////////////////////////////
    responsive(canvas){
        
        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.22; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
             
             if(window.innerHeight<350){
                canvas.height = window.innerHeight*0.2; 
             }
             else{
                canvas.height = window.innerHeight*0.1; 
             }
        }
        
        return canvas;
    }///////////////////////////////////////////////////////////////
}