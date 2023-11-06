export const getFormattedData = (data, official) => {
  const tasks = data.tasks;
  tasks.forEach((task, index) => {
    const new_object = {
      ...task,
      location: {
        latitude: parseFloat(task.latitude),
        longitude: parseFloat(task.longitude),
      },
      hints: task.hints.split("\n"),
    };
    tasks[index] = new_object;
  });
  const formated_data = {
    ...data,
    location: {
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    },
    tasks: tasks,
    official: official,
  };
  return formated_data;
};

export const getTaskFormatedData = (data, sector_id) => {
  return {
    ...data,
    location: {
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    },
    hints: data.hints.split("\n"),
    sector_id: sector_id,
  };
};
