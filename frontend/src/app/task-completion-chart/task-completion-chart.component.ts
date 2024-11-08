import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-completion-chart',
  templateUrl: './task-completion-chart.component.html',
  styleUrls: ['./task-completion-chart.component.css']
})
export class TaskCompletionChartComponent implements OnInit {

  public pieChartType: ChartType = 'pie';
  public pieChartData!: ChartData<'pie'>;
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    }
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData(): void {
    this.taskService.getTasks().subscribe(tasks => {
      const completedTasks = tasks.filter(task => task.completed).length;
      const pendingTasks = tasks.length - completedTasks;

      this.pieChartData = {
        labels: ['Completed', 'Pending'],
        datasets: [{
          data: [completedTasks, pendingTasks],
          backgroundColor: ['#4CAF50', '#FFC107']
        }]
      };
    });
  }
}
