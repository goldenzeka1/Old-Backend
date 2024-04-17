import { Controller, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly StudentService: StudentService) { }
    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        // Your logic to save the student goes here
        // You can use a service to handle the business logic
        console.log('Creating a new student:', createStudentDto);
        // Return a response if needed
        return { message: 'Student created successfully' };
    }
}
