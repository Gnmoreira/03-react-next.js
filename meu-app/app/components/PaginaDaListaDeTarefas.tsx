// pages/index.tsx
import { useEffect, useState } from 'react';
import { tarefasMockadas } from '../data/tarefas';
import { Tarefa } from '../types/Tarefa';
export default function Home() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTarefas(tarefasMockadas);
            setCarregando(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <main className="flex flex-col justify-center items-center h-screen
p-2">
            <h1 className="font-bold pb-2">Minhas Tarefas</h1>
            {carregando ? <p>Carregando...</p> : (

                <ul>
                    {tarefas.map(tarefa =>
                        <li
                            key={tarefa.id}
                            className="py-1">
                            {tarefa.id} - {tarefa.titulo}
                        </li>
                    )}
                </ul>
            )}
        </main>
    );
}