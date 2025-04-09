import { Router } from "express";
import pool from "../database.js";


const router = Router();

router.get('/add', async(req, res) =>{
    pool.query('SELECT * FROM regalos', (error, result) => {
    if (error) {
      throw error
    }

    res.render('personas/add', {regalos: result.rows});
  })
    
});

router.post('/add', async(req, res)=>{
    const { name, cover, regalo, asistencia } = req.body;

    pool.query('INSERT INTO asistentes SET (name, cover, regalo, asistencia) VALUES ($1, $2, $3, $4)', [name,cover, regalo, asistencia], (error, results) => {
        if (error) {
            throw error
        }
        res.send("POST request received.");
    })
   
});

router.get('/list', async(req, res)=>{
  pool.query('SELECT * FROM asistentes', (error, result) => {
    if (error) {
      throw error
    }

    res.render('personas/list', {regalos: result.rows});
  })
});

router.get('/gifts', async(req, res)=>{
  pool.query('SELECT DISTINCT regalo FROM regalos', (error, result) => {
    if (error) {
      throw error
    }

    res.render('personas/gifts', {regalos: result.rows});
  })
});


router.get('/delete/:id', async(req, res)=>{
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM asistentes WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
       res.redirect('/list');
    })
});

export default router;
