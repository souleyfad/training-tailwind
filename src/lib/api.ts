import { ENDPOINTS } from './constants';

export interface Programme {
  id?: string;
  title: string;
  date: string;
  message: string;
  image: string;
}

export async function getProgrammes(): Promise<Programme[]> {
  const res = await fetch(ENDPOINTS.PROGRAMS);
  if (!res.ok) throw new Error('Erreur lors du chargement des programmes');
  return res.json();
}

export async function createProgramme(data: Programme): Promise<Programme> {
  const res = await fetch(ENDPOINTS.PROGRAMS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout");
  return res.json();
}

export async function updateProgramme(id: string, data: Programme): Promise<Programme> {
  const res = await fetch(`${ENDPOINTS.PROGRAMS}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Erreur lors de la modification");
  return res.json();
}

export async function deleteProgramme(id: string): Promise<void> {
  const res = await fetch(`${ENDPOINTS.PROGRAMS}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error("Erreur lors de la suppression");
}
