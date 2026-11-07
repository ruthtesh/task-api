import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  if (completed !== undefined ) {
    return taskRepository.findAllCompleted(completed);
  }
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
