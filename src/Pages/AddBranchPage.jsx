import React from 'react'
import BranchCreateForm from '../components/BranchCreateForm'

export default function AddServicePage() {
    return (
        <div style={{ paddingTop: "60px", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <h1 style={{ textAlign: "center" }}>Add Branch</h1>
                <BranchCreateForm />

            </div>
        </div>
    )
}
