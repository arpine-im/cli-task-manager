import { Command } from 'commander';
import { addTask, listTasks, updateTask, deleteTask } from './taskModel.js';

const program = new Command();

program
  .name('task-manager')
  .description('CLI tool for managing tasks')
  .version('1.0.0');

program
  .command('add <title>')
  .description('Add a new task')
  .action((title) => {
    addTask(title);
    console.log(`✅ Task "${title}" added.`);
  });

program
  .command('list')
  .description('List all tasks')
  .action(() => {
    const tasks = listTasks();
    tasks.forEach((t: any) =>
      console.log(`${t.id}. ${t.title} [${t.done ? '✓' : ' '}]`)
    );
  });

program
  .command('done <id>')
  .description('Mark task as done')
  .action((id) => {
    updateTask(Number(id), true);
    console.log(`✅ Task ${id} marked as done.`);
  });

program
  .command('delete <id>')
  .description('Delete a task')
  .action((id) => {
    deleteTask(Number(id));
    console.log(`🗑️ Task ${id} deleted.`);
  });

program.parse(process.argv);
