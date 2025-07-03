import db from './db.js';


/**
 * 
 * @param title 
 */
export function addTask(title: string) {
  const stmt = db.prepare('INSERT INTO tasks (title) VALUES (?)');
  stmt.run(title);
}

/**
 * 
 * @returns 
 */
export function listTasks() {
  return db.prepare('SELECT id, title, done FROM tasks').all();
}

/**
 * 
 * @param id 
 * @param done 
 */
export function updateTask(id: number, done: boolean) {
  const stmt = db.prepare('UPDATE tasks SET done = ? WHERE id = ?');
  stmt.run(done ? 1 : 0, id);
}

/**
 * 
 * @param id 
 */
export function deleteTask(id: number) {
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
  stmt.run(id);
}