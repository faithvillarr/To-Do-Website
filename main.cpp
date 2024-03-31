#include <string>
#include <vector>
#include <iostream>

using namespace std;

class TaskMaster{
private:
    class Task{
    private:
        bool done = false;
        string name;
        string description; // might change during task
        vector<Task*> subtasks;

    public:
        Task(const string & name, string description): name(name), description(description){};
        void printTask(){
            std::cout <<"[] "<< name << "\n\tDESCRIPTION: " << description << std::endl;
        }
    };
    vector<Task*> taskList;
    size_t taskCount;
public:
    ~TaskMaster() {
        for (Task * task : taskList){
            delete task;
            task = nullptr;
        }
        taskList.clear();
        std::cout << "Memory restored.\n";
    }
    void addTask(const string & name, string description);
    void markDone(const string & name);
    void deleteTask(const string & name);
    void printTasks();

    size_t getTaskCount() { return taskCount; }
};

void TaskMaster::addTask(const string &name, string description) {
    Task * new_task = new Task(name, description);
    taskList.push_back(new_task);
    taskCount++;
}

void TaskMaster::printTasks() {
    std::cout << "YOUR TASKS:\n -----------------------\n";
    for(Task * task : taskList) task->printTask();
    std::cout << "-----------------------\n";
}

int main(){
    cout << "Hi! Welcome to Taskmaster!" << std::endl;
    TaskMaster tm = TaskMaster();
    tm.addTask("Catch on Physio Content", "Go thru PPTs and take notes.");
    tm.addTask("Watch Algo Lectures", "Watch two missed lectures.");
    tm.printTasks();
}