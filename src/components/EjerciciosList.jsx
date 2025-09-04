import React, { useState } from 'react'

const EjerciciosList = ({ ejercicios, onEdit, onDelete }) => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  if (ejercicios.length === 0) {
    return (
      <div className="ejercicios-list-sidebar">
        <h2>Lista de Ejercicios</h2>
        <p className="no-ejercicios">No hay ejercicios registrados</p>
      </div>
    )
  }

  return (
    <div className="ejercicios-list-sidebar">
      <h2>Lista de Ejercicios ({ejercicios.length})</h2>
      <div className="ejercicios-sidebar-grid">
        {ejercicios.map((ejercicio) => (
          <div key={ejercicio.id} className="ejercicio-sidebar-card">
            <div 
              className="ejercicio-sidebar-header"
              onClick={() => toggleCard(ejercicio.id)}
            >
              <h3>{ejercicio.nombre} {ejercicio.semana}</h3>
              <span className={`expand-icon ${expandedCard === ejercicio.id ? 'expanded' : ''}`}>
                ▼
              </span>
            </div>
            
            {expandedCard === ejercicio.id && (
              <div className="ejercicio-sidebar-content">
                {ejercicio.imagen_url && (
                  <div className="ejercicio-sidebar-image">
                    <img src={ejercicio.imagen_url} alt={ejercicio.nombre} />
                  </div>
                )}
                
                <div className="ejercicio-sidebar-details">
                  {ejercicio.dia && (
                    <div className="detail-item">
                      <strong>Día:</strong> {ejercicio.dia}
                    </div>
                  )}
                  {ejercicio.semana && (
                    <div className="detail-item">
                      <strong>Semana:</strong> {ejercicio.semana}
                    </div>
                  )}
                  {ejercicio.series && (
                    <div className="detail-item">
                      <strong>Series:</strong> {ejercicio.series}
                    </div>
                  )}
                  {ejercicio.repeticiones && (
                    <div className="detail-item">
                      <strong>Repeticiones:</strong> {ejercicio.repeticiones}
                    </div>
                  )}
                  {ejercicio.peso && (
                    <div className="detail-item">
                      <strong>Peso:</strong> {ejercicio.peso}
                    </div>
                  )}
                  {ejercicio.descanso && (
                    <div className="detail-item">
                      <strong>Descanso:</strong> {ejercicio.descanso}
                    </div>
                  )}
                  {ejercicio.tiempo && (
                    <div className="detail-item">
                      <strong>Tiempo:</strong> {ejercicio.tiempo}
                    </div>
                  )}
                </div>
                
                <div className="ejercicio-sidebar-actions">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      onEdit(ejercicio)
                    }}
                    className="btn-edit-sidebar"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      onDelete(ejercicio.id)
                    }}
                    className="btn-delete-sidebar"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EjerciciosList