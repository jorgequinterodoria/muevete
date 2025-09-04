import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import EjercicioForm from './EjercicioForm'
import EjerciciosList from './EjerciciosList'

const EjerciciosManager = () => {
  const [ejercicios, setEjercicios] = useState([])
  const [editingEjercicio, setEditingEjercicio] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEjercicios()
  }, [])

  const fetchEjercicios = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('ejercicios')
        .select('*')
        .order('id', { ascending: true })
      
      if (error) throw error
      setEjercicios(data || [])
    } catch (error) {
      console.error('Error fetching ejercicios:', error)
      alert('Error al cargar ejercicios')
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (ejercicioData) => {
    try {
      const { data, error } = await supabase
        .from('ejercicios')
        .insert([ejercicioData])
        .select()
      
      if (error) throw error
      setEjercicios([...ejercicios, ...data])
      alert('Ejercicio creado exitosamente')
    } catch (error) {
      console.error('Error creating ejercicio:', error)
      alert('Error al crear ejercicio')
    }
  }

  const handleUpdate = async (id, ejercicioData) => {
    try {
      const { data, error } = await supabase
        .from('ejercicios')
        .update(ejercicioData)
        .eq('id', id)
        .select()
      
      if (error) throw error
      setEjercicios(ejercicios.map(ej => ej.id === id ? data[0] : ej))
      setEditingEjercicio(null)
      alert('Ejercicio actualizado exitosamente')
    } catch (error) {
      console.error('Error updating ejercicio:', error)
      alert('Error al actualizar ejercicio')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este ejercicio?')) return
    
    try {
      const { error } = await supabase
        .from('ejercicios')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      setEjercicios(ejercicios.filter(ej => ej.id !== id))
      alert('Ejercicio eliminado exitosamente')
    } catch (error) {
      console.error('Error deleting ejercicio:', error)
      alert('Error al eliminar ejercicio')
    }
  }

  if (loading) {
    return <div className="loading">Cargando ejercicios...</div>
  }

  return (
    <div className="ejercicios-manager">
      <h1>Gestión de Ejercicios</h1>
      
      <div className="main-layout">
        <div className="form-section">
          <EjercicioForm
            ejercicio={editingEjercicio}
            onSubmit={editingEjercicio ? 
              (data) => handleUpdate(editingEjercicio.id, data) : 
              handleCreate
            }
            onCancel={() => setEditingEjercicio(null)}
          />
        </div>
        
        <div className="list-section">
          <EjerciciosList
            ejercicios={ejercicios}
            onEdit={setEditingEjercicio}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default EjerciciosManager