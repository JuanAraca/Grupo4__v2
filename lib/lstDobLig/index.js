import {ListaDoblementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null)
        return;

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.insertar_inicio(DATO);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos(DATO);
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.insertar_final(DATO);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos(DATO);
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_antes_x(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return;
            
        lista.insertar_antes_x(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos(DATO);
    
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null)
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null)
            return;
            
        lista.insertar_despues_x(DATO,X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos(DATO);
    
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function eliminar_inicio(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        await lista.eliminar_inicio();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos();
    
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_ultimo(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        
        await lista.eliminar_ultimo();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos();
    
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_x(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("Ingrese valor a eliminar");
        if(X==null) 
            return;

        await lista.eliminar_x(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos();
    
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_antes_x(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("Ingrese valor a eliminar");
        if(X==null) 
            return;

        await lista.eliminar_antes_x(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos();
    
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_despues_x(){
    var canvas3=document.getElementById('tutorial3');
    if(lista==null){
        lista=new ListaDoblementeLigada(canvas3);	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("Ingrese valor a eliminar");
        if(X==null) 
            return;

        await lista.eliminar_despues_x(X);
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
        lista.dibujarNodos();
    
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");

    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
