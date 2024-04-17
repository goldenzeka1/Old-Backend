import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';

@Injectable()
export class StudentService {
    create(createStudentDto: CreateStudentDto) {
        // Your logic to save the student goes here
        console.log('Saving student in the service:', createStudentDto);
        // Return any result or perform other operations
        return { message: 'Student saved successfully' };
    }
}