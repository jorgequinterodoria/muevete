import React, { useState, useEffect } from 'react'

const EjercicioForm = ({ ejercicio, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    dia: '',
    semana: '',
    nombre: '',
    series: '',
    repeticiones: '',
    peso: '',
    descanso: '',
    tiempo: '',
    imagen_url: ''
  })

  useEffect(() => {
    if (ejercicio) {
      setFormData({
        dia: ejercicio.dia || '',
        semana: ejercicio.semana || '',
        nombre: ejercicio.nombre || '',
        series: ejercicio.series || '',
        repeticiones: ejercicio.repeticiones || '',
        peso: ejercicio.peso || '',
        descanso: ejercicio.descanso || '',
        tiempo: ejercicio.tiempo || '',
        imagen_url: ejercicio.imagen_url || ''
      })
    } else {
      setFormData({
        dia: '',
        semana: '',
        nombre: '',
        series: '',
        repeticiones: '',
        peso: '',
        descanso: '',
        tiempo: '',
        imagen_url: ''
      })
    }
  }, [ejercicio])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.nombre.trim()) {
      alert('El nombre del ejercicio es obligatorio')
      return
    }
    
    const dataToSubmit = {
      ...formData,
      series: formData.series ? parseInt(formData.series) : null
    }
    
    onSubmit(dataToSubmit)
    
    if (!ejercicio) {
      setFormData({
        dia: '',
        semana: '',
        nombre: '',
        series: '',
        repeticiones: '',
        peso: '',
        descanso: '',
        tiempo: '',
        imagen_url: ''
      })
    }
  }

  return (
    <div className="ejercicio-form">
      <h2>{ejercicio ? 'Editar Ejercicio' : 'Nuevo Ejercicio'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dia">Día:</label>
            <select
              id="dia"
              name="dia"
              value={formData.dia}
              onChange={handleChange}
            >
              <option value="">Seleccionar día</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miércoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sábado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="semana">Semana:</label>
            <input
              type="text"
              id="semana"
              name="semana"
              value={formData.semana}
              onChange={handleChange}
              placeholder="Ej: Semana 1 y 2"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre del Ejercicio *:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Nombre del ejercicio"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="series">Series:</label>
            <input
              type="number"
              id="series"
              name="series"
              value={formData.series}
              onChange={handleChange}
              placeholder="Número de series"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="repeticiones">Repeticiones:</label>
            <input
              type="text"
              id="repeticiones"
              name="repeticiones"
              value={formData.repeticiones}
              onChange={handleChange}
              placeholder="Ej: 12, 8-10"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              placeholder="Ej: 45kg"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="descanso">Descanso:</label>
            <input
              type="text"
              id="descanso"
              name="descanso"
              value={formData.descanso}
              onChange={handleChange}
              placeholder="Ej: 90s, 1'30"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="tiempo">Tiempo/Tempo:</label>
            <input
              type="text"
              id="tiempo"
              name="tiempo"
              value={formData.tiempo}
              onChange={handleChange}
              placeholder="Tempo de ejecución"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="imagen_url">URL de Imagen:</label>
            <input
              type="url"
              id="imagen_url"
              name="imagen_url"
              value={formData.imagen_url}
              onChange={handleChange}
              placeholder="URL de la imagen"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {ejercicio ? 'Actualizar' : 'Crear'} Ejercicio
          </button>
          {ejercicio && (
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default EjercicioForm