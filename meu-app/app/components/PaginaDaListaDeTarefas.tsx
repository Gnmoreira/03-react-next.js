// pages/index.tsx
import { useEffect, useState } from 'react';
//importa os hooks do react (o useeffect e  usestate sao hooks)
import { tarefasMockadas } from '../data/tarefas';
import { Tarefa } from '../types/Tarefa';
//importa tarefasmockadas do data/tarefas e tarefa de types/tarefa
export default function Home() {
//pagina home 
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);
    // comeca com um array vazio e confere se esta carregando
    useEffect(() => {
        const timer = setTimeout(() => {
            setTarefas(tarefasMockadas);
            //define as tarefas 
            setCarregando(false);
            //tira o carregando
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    //caso seja desmontado antes do tempo ele cancela o timeout
    return (
        <main className="flex flex-col justify-center items-center h-screen
p-2">
     
            <h1 className="font-bold pb-2">Minhas Tarefas</h1>
            {carregando ? <p>Carregando...</p> : (
//se estiver carregando mostra o "carregando"
                <ul>
                    {tarefas.map(tarefa =>
                        <li
                            key={tarefa.id}
                            className="py-1">
                            {tarefa.id} - {tarefa.titulo}
                        </li>
                         // depois que ja estiver carregado mostra a lista de tarefas
                    )}
                </ul>
            )}
        </main>
    );
}