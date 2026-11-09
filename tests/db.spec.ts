import { Pool } from 'pg';
import { expect, test } from '@playwright/test';


test('Database connection test', async () => {
  const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Saddam',
    port: 5432,
  });

  try {
    const queryResult = await connection.query('select * from insturctors');
    const instructorId = queryResult.rows[0].id;
    const instructorName = queryResult.rows[0].instructor_name;
    console.log(`Command used : ${queryResult.command}`);
    console.log(`row count is : ${queryResult.rowCount}`);
    console.log(`First row : ${JSON.stringify(queryResult.rows[0])}`);
    console.log(`id of First row : ${instructorId}`);
    console.log(`course name of First row : ${instructorName}`);

    // Assertions
    expect(instructorId).toBe(1);
    expect(instructorName).toBe('insturctor1');
  } finally {
    await connection.end();
  }
});

test('Second database connection test', async () => {
  const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Saddam',
    port: 5432,
  });

  try {
    const queryResult = await connection.query('select * from courses');
    const firstCourseId = queryResult.rows[0].id;
    const firstCourseName = queryResult.rows[0].course_name;
    const firstCoursePrice = queryResult.rows[0].course_price;
    const secondCourseId = queryResult.rows[1].id;
    const secondCourseName = queryResult.rows[1].course_name;
    const secondCoursePrice = queryResult.rows[1].course_price;
    console.log(`command used : ${queryResult.command}`);
    console.log(`row count is : ${queryResult.rowCount}`);
    console.log(`First row : ${JSON.stringify(queryResult.rows[0])}`);
    console.log(`id of First row : ${queryResult.rows[0].id}`);
    console.log(`course name of firstRow : ${queryResult.rows[0].course_name}`);
    console.log(`price of first course : ${queryResult.rows[0].course_price}`);
    console.log(`Second row : ${JSON.stringify(queryResult.rows[1])}`);
    console.log(`id of Second row : ${queryResult.rows[1].id}`);
    console.log(`course name of second Row : ${queryResult.rows[1].course_name}`);
    console.log(`price of second course : ${queryResult.rows[1].course_price}`);

    expect(queryResult.command).toBe('SELECT');
    expect(queryResult.rowCount).toBe(4);
    expect(firstCourseId).toBe(1);
    expect(firstCourseName).toBe('palywright basics');
    expect(firstCoursePrice).toBeGreaterThanOrEqual(1200);
    expect(secondCourseId).toBe(2);
    expect(secondCourseName).toBe('palywright advanced');
    expect(secondCoursePrice).toBeGreaterThan(1500);


  } finally {
    await connection.end();
  }
});

test('Third database connection test', async () => {
  const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Saddam',
    port: 5432,
  });

  try {
    const queryResult = await connection.query('select i.instructor_name , c.course_name , c.course_price from insturctors as i join courses as c on i.id = c.instructor_id');
    console.log(`command used : ${queryResult.command}`);
    console.log(`row count is : ${queryResult.rowCount}`);
    console.log(`First row : ${JSON.stringify(queryResult.rows[0])}`);
    const firstInstructorName = queryResult.rows[0].instructor_name;
    const firstCourseName = queryResult.rows[0].course_name;
    const firstCoursePrice = queryResult.rows[0].course_price;
    console.log(`Instructor name of first row : ${firstInstructorName}`);
    console.log(`Course name of first row : ${firstCourseName}`);
    console.log(`Course price of first row : ${firstCoursePrice}`);

    // Assertions
    expect(queryResult.command).toBe('SELECT');
    expect(queryResult.rowCount).toBe(4);
    expect(firstInstructorName).toBe('insturctor1');
    expect(firstCourseName).toBe('palywright basics');
    expect(firstCoursePrice).toBeGreaterThanOrEqual(1200);
  } finally {
    await connection.end();
  }
});