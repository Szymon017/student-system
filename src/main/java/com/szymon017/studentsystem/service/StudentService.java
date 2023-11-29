package com.szymon017.studentsystem.service;

import com.szymon017.studentsystem.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
