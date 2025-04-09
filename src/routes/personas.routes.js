import { Router } from "express";
import pool from "../database.js";


const router = Router();

router.get('/add', async(req, res) =>{
    try {
        const [result] = await pool.query('SELECT * FROM regalos');
        res.render('personas/add', { regalos: result.rows });
    } catch (err) {
        res.status(500).json({message:err.message});
    }
    
});

router.post('/add', async(req, res)=>{
    try {
        const {name, cover, regalo, asistencia } = req.body;
        const newPersona = {
            name, asistencia
        }; 
        const newAsistente = {
            name, cover, regalo, asistencia
        }
       await pool.query('INSERT INTO personas SET ?', [newPersona]);
        await pool.query('INSERT INTO asistentes SET ?', [newAsistente]);
        res.redirect('/list');
    } catch (err) {
        res.status(500).json({message:err.message});
        console.log(newAsistente[name]);
    }
})

router.get('/list', async(req, res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM asistentes');
        res.render('personas/list', {asistentes: result.rows});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/gifts', async(req, res)=>{
  pool.query('SELECT * FROM regalos', (error, result) => {
    if (error) {
      throw error
    }

    res.render('personas/gifts', {regalos: result.rows});
  })
});

router.get('/edit/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const [persona] = await pool.query('SELECT * FROM asistentes WHERE id = ?', [id]);
        const personaEdit = persona[0];
        res.render('personas/edit', {asistente: personaEdit});

    } catch (error) {
        res.status(500).json({message:err.message});
    }
});

router.post('/edit/:id', async(req,res)=>{
    try {
        const {name, cover, regalo, asistencia} = req.body;
        const {id} = req.params;
        const editPersona = {name, cover, regalo, asistencia};
        const [result] = await pool.query('SELECT * FROM regalos');
        res.render('personas/edit/:id', { regalos: result.rows });
        await pool.query('UPDATE asistentes SET id = ? WHERE id = ?', [editPersona, id]);
        res.redirect('/list');

    } catch (error) {
        res.status(500).json({message:err.message});
    }
});

router.get('/delete/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        await pool.query('DELETE FROM personas WHERE id = ?', [id]);
        await pool.query('DELETE FROM asistentes WHERE id = ?', [id]);
        res.redirect('/list');
    } catch (error) {
        res.status(500).json({message:err.message});
    }
});

export default router;
